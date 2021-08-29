# Imports
import argparse
from pathlib import Path
import sys
from markov_matrix_generator import TextGenerator

# Constants
DATA_DIR = Path('../data/')
SECRETS = Path('./secrets.json')

def main(args):
    """Validates the arguments passed, launches data download
    Args:
        args (object): command line arguments passed to the script
    """

    temp = TextGenerator(args["file_path"], int(args["song_length"]))
    print(temp.generate_text())

if __name__ == "__main__":
    full_artist_name = sys.argv[2].split()
    file_path = ""

    for part in full_artist_name:
      file_path += part + "_"

    file_path += "lyrics.txt"
    args = {"song_length": sys.argv[1],
            "file_path": file_path} 

    main(args)

