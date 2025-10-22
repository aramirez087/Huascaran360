#!/usr/bin/env python3
"""Optimize GPX file by reducing track points"""

import xml.etree.ElementTree as ET
import math

def calculate_distance(lat1, lon1, lat2, lon2):
    """Calculate distance between two GPS points in meters"""
    R = 6371000  # Earth's radius in meters
    lat1_rad = math.radians(lat1)
    lat2_rad = math.radians(lat2)
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)

    a = math.sin(dlat/2) * math.sin(dlat/2) + \
        math.cos(lat1_rad) * math.cos(lat2_rad) * \
        math.sin(dlon/2) * math.sin(dlon/2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    return R * c

def simplify_gpx(input_file, output_file, min_distance=10):
    """
    Simplify GPX by keeping points at least min_distance meters apart

    Args:
        input_file: Input GPX file path
        output_file: Output GPX file path
        min_distance: Minimum distance between points in meters (default: 10m)
    """

    # Parse GPX
    tree = ET.parse(input_file)
    root = tree.getroot()

    # Define namespace
    ns = {'': 'http://www.topografix.com/GPX/1/1'}

    # Find all track segments
    track_segments = root.findall('.//{http://www.topografix.com/GPX/1/1}trkseg')

    total_original = 0
    total_simplified = 0

    for trkseg in track_segments:
        trkpts = trkseg.findall('{http://www.topografix.com/GPX/1/1}trkpt')
        original_count = len(trkpts)
        total_original += original_count

        if original_count == 0:
            continue

        # Keep first point
        simplified_points = [trkpts[0]]
        last_lat = float(trkpts[0].get('lat'))
        last_lon = float(trkpts[0].get('lon'))

        # Process middle points
        for i in range(1, len(trkpts) - 1):
            pt = trkpts[i]
            lat = float(pt.get('lat'))
            lon = float(pt.get('lon'))

            # Calculate distance from last kept point
            dist = calculate_distance(last_lat, last_lon, lat, lon)

            if dist >= min_distance:
                simplified_points.append(pt)
                last_lat = lat
                last_lon = lon

        # Always keep last point
        simplified_points.append(trkpts[-1])

        # Remove all existing points
        for pt in trkpts:
            trkseg.remove(pt)

        # Add simplified points back
        for pt in simplified_points:
            trkseg.append(pt)

        total_simplified += len(simplified_points)
        print(f"Segment: {original_count} points -> {len(simplified_points)} points ({len(simplified_points)/original_count*100:.1f}%)")

    # Write simplified GPX
    tree.write(output_file, encoding='UTF-8', xml_declaration=True)

    print(f"\nTotal: {total_original} points -> {total_simplified} points")
    print(f"Reduction: {(1 - total_simplified/total_original)*100:.1f}%")

    # Get file sizes
    import os
    original_size = os.path.getsize(input_file)
    new_size = os.path.getsize(output_file)
    print(f"\nFile size: {original_size/1024/1024:.2f} MB -> {new_size/1024:.1f} KB")
    print(f"Size reduction: {(1 - new_size/original_size)*100:.1f}%")

if __name__ == '__main__':
    print("Optimizing GPX file...")
    print("Keeping points at least 10 meters apart\n")

    simplify_gpx('huascaran.gpx', 'huascaran-optimized.gpx', min_distance=10)

    print("\nSuccess! Created huascaran-optimized.gpx")
    print("\nYou can adjust min_distance for different levels of detail:")
    print("  5m = very detailed (larger file)")
    print("  10m = good balance (recommended)")
    print("  20m = simplified (smaller file)")
