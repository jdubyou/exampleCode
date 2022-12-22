# Summary of Problem Solving Techniques
#
# * Program errors can be calssified into three groups: syntax errors, 
#   runtime errors, and logical errors. The cmputer will usualy tell you 
#   about erros in the first to categories

# * To test for and locate logical errors, one tenquie is to trace variables
#   Problmes can be solved and programd written in phases.. First, a simper 
#   version is deisgned adn tested, and then enhancements are added later

# Import a library sys. This allows you to use different functions built-in to the language
# Or third-party libraries built by other developers/engineers
# Libraries are collections of codes or modules of codes that can be used in a program for 
# a specific operation.

# *** Note: a program is a defined set statements combined in an algorithm or set of algorithm to do something defined in code.
# That is, a sequence of staemetns that are compiled or interpretted by the computer
# and execute in memory

# if we import math we can do math operations.

# ***

import math

A = 16
print(math.sqrt(A))
x = math.pow(2, 3)
print(x)
print(math.pi)

# *** Note we imported the entire math library, but we can import specific items
#     from that library

from math import sqrt, sin

B = 25
print(sqrt(B))

import sys

# input allows you to promp the user on the command-line

# A simple program to take a name, plus a year and calculate age.
####name = input("Please enter your name: ")
###year = input("What year where you born: ")
### age = 2022 - int(year)

### print(name, "you are ",age, "years old")

blah = ""
# Command line argumetns can be passed directly to a program by placing
# the arguments directon to program. Example: python3 kestony.py foo bar
# foo and bar are command line arguments passed to kestony.py(<---this is  the program)

if len(sys.argv) > 1:
    if (sys.argv[1] == "d4":
            if (sys.argv[2] == "f4":
                print("London")
