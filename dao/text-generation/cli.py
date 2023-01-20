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

def check_valid_inputs(arguments):
    artists = ["Kanye West", "Queen", "Taylor Swift", "The Beatles"]

    if len(arguments) != 3:
        print("ERROR! Invalid number of arguments. Check request parameters. Should be \
               of format '~/?artist=[name]&songLength=[length]'")
    elif sys.argv[1] == 'undefined':
        print(f"ERROR! Invalid song length. Either song length is not an integer or songLength is not a param")
    elif sys.argv[2] not in artists:
        print(f"ERROR! Invalid artist. Must be one of {artists}")
    
    return len(arguments) == 3 and type(sys.argv[1]) != 'undefined' and sys.argv[2] in artists

if __name__ == "__main__":
    if check_valid_inputs(sys.argv):
        full_artist_name = sys.argv[2].split()
        file_path = ""

        for part in full_artist_name:
            file_path += part + "_"

        file_path += "lyrics.txt"
        args = {"song_length": sys.argv[1],
                "file_path": file_path} 

        main(args)

