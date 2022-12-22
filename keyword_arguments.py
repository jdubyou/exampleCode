# A keyword argument is a name-value pair that you pass to a function
# You assoicate the name and the value within the argument
# This matters because you don't have to worry about order

def describe_opening(color, opening_name):
    print(f"\nI play the {opening_name} with the {color} pieces.")

describe_opening(opening_name = 'Pirc', color = 'black')


# Default values allow you to specify a default value
# If an argument is not passed for a parameter, Python inserts the default value
# Default values usueally go at the end in most languages
def describe_opening2(color, opening_name = 'London'):
    print(f"\nI play the {opening_name} with the {color} pieces.")

describe_opening2("white")

