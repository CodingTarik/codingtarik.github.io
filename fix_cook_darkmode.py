#!/usr/bin/env python3
"""
Fix dark mode styling issues in Cook Buddy lessons
"""

import os
import re
import glob

# Define the replacement patterns
replacements = [
    # Background colors with borders
    (r'className="([^"]*?)bg-amber-50([^"]*?)border border-amber-100([^"]*?)"',
     r'className="\1bg-amber-50 dark:bg-amber-900/40\2border border-amber-200 dark:border-amber-700\3"'),
    (r'className="([^"]*?)bg-amber-50([^"]*?)"',
     r'className="\1bg-amber-50 dark:bg-amber-900/40\2"'),
    
    (r'className="([^"]*?)bg-blue-50([^"]*?)border border-blue-100([^"]*?)"',
     r'className="\1bg-blue-50 dark:bg-blue-900/40\2border border-blue-200 dark:border-blue-700\3"'),
    (r'className="([^"]*?)bg-blue-50([^"]*?)"',
     r'className="\1bg-blue-50 dark:bg-blue-900/40\2"'),
    
    (r'className="([^"]*?)bg-green-50([^"]*?)border border-green-100([^"]*?)"',
     r'className="\1bg-green-50 dark:bg-green-900/40\2border border-green-200 dark:border-green-700\3"'),
    (r'className="([^"]*?)bg-green-50([^"]*?)"',
     r'className="\1bg-green-50 dark:bg-green-900/40\2"'),
    
    (r'className="([^"]*?)bg-red-50([^"]*?)border border-red-100([^"]*?)"',
     r'className="\1bg-red-50 dark:bg-red-900/40\2border border-red-200 dark:border-red-700\3"'),
    (r'className="([^"]*?)bg-red-50([^"]*?)"',
     r'className="\1bg-red-50 dark:bg-red-900/40\2"'),
    
    (r'className="([^"]*?)bg-purple-50([^"]*?)border border-purple-100([^"]*?)"',
     r'className="\1bg-purple-50 dark:bg-purple-900/40\2border border-purple-200 dark:border-purple-700\3"'),
    (r'className="([^"]*?)bg-purple-50([^"]*?)"',
     r'className="\1bg-purple-50 dark:bg-purple-900/40\2"'),
    
    (r'className="([^"]*?)bg-orange-50([^"]*?)border border-orange-100([^"]*?)"',
     r'className="\1bg-orange-50 dark:bg-orange-900/40\2border border-orange-200 dark:border-orange-700\3"'),
    (r'className="([^"]*?)bg-orange-50([^"]*?)"',
     r'className="\1bg-orange-50 dark:bg-orange-900/40\2"'),
    
    (r'className="([^"]*?)bg-yellow-50([^"]*?)border border-yellow-100([^"]*?)"',
     r'className="\1bg-yellow-50 dark:bg-yellow-900/40\2border border-yellow-200 dark:border-yellow-700\3"'),
    (r'className="([^"]*?)bg-yellow-50([^"]*?)"',
     r'className="\1bg-yellow-50 dark:bg-yellow-900/40\2"'),
    
    (r'className="([^"]*?)bg-gray-100([^"]*?)"',
     r'className="\1bg-gray-100 dark:bg-gray-800\2"'),
    (r'className="([^"]*?)bg-gray-50([^"]*?)"',
     r'className="\1bg-gray-50 dark:bg-gray-800\2"'),
    
    # Text colors
    (r'className="([^"]*?)text-amber-800([^"]*?)"',
     r'className="\1text-amber-800 dark:text-amber-200\2"'),
    (r'className="([^"]*?)text-amber-700([^"]*?)"',
     r'className="\1text-amber-700 dark:text-amber-300\2"'),
    
    (r'className="([^"]*?)text-blue-800([^"]*?)"',
     r'className="\1text-blue-800 dark:text-blue-200\2"'),
    (r'className="([^"]*?)text-blue-700([^"]*?)"',
     r'className="\1text-blue-700 dark:text-blue-300\2"'),
    
    (r'className="([^"]*?)text-green-800([^"]*?)"',
     r'className="\1text-green-800 dark:text-green-200\2"'),
    (r'className="([^"]*?)text-green-700([^"]*?)"',
     r'className="\1text-green-700 dark:text-green-300\2"'),
    
    (r'className="([^"]*?)text-red-800([^"]*?)"',
     r'className="\1text-red-800 dark:text-red-200\2"'),
    (r'className="([^"]*?)text-red-700([^"]*?)"',
     r'className="\1text-red-700 dark:text-red-300\2"'),
    
    (r'className="([^"]*?)text-purple-800([^"]*?)"',
     r'className="\1text-purple-800 dark:text-purple-200\2"'),
    (r'className="([^"]*?)text-purple-700([^"]*?)"',
     r'className="\1text-purple-700 dark:text-purple-300\2"'),
    
    (r'className="([^"]*?)text-orange-800([^"]*?)"',
     r'className="\1text-orange-800 dark:text-orange-200\2"'),
    (r'className="([^"]*?)text-orange-700([^"]*?)"',
     r'className="\1text-orange-700 dark:text-orange-300\2"'),
    
    (r'className="([^"]*?)text-yellow-800([^"]*?)"',
     r'className="\1text-yellow-800 dark:text-yellow-200\2"'),
    (r'className="([^"]*?)text-yellow-700([^"]*?)"',
     r'className="\1text-yellow-700 dark:text-yellow-300\2"'),
    
    (r'className="([^"]*?)text-gray-800([^"]*?)"',
     r'className="\1text-gray-800 dark:text-gray-200\2"'),
    (r'className="([^"]*?)text-gray-700([^"]*?)"',
     r'className="\1text-gray-700 dark:text-gray-300\2"'),
]

def fix_file(filepath):
    """Fix dark mode issues in a single file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all replacements
        for pattern, replacement in replacements:
            # Only replace if dark: is not already present
            if 'dark:' not in pattern:
                # Check if this specific class already has dark mode
                content = re.sub(pattern, replacement, content)
        
        # Only write if content changed
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    """Main function to fix all Cook Buddy lesson files"""
    lessons_dir = 'src/learnbuddy/buddies/cook/lessons'
    
    if not os.path.exists(lessons_dir):
        print(f"Directory not found: {lessons_dir}")
        return
    
    # Find all .jsx files
    jsx_files = glob.glob(f"{lessons_dir}/**/*.jsx", recursive=True)
    
    print(f"Found {len(jsx_files)} files to process")
    
    fixed_count = 0
    for filepath in jsx_files:
        if fix_file(filepath):
            print(f"✓ Fixed: {filepath}")
            fixed_count += 1
        else:
            print(f"  Skipped: {filepath}")
    
    print(f"\nFixed {fixed_count} out of {len(jsx_files)} files")

if __name__ == '__main__':
    main()


