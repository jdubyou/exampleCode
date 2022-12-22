# Positional Arguments
# Argumetns are matched up based on their order or position
# We refer to the next line as the function definition.
# It defines what the name of the function and its parameters
def describe_opening(color, opening_name):
    print(f"\nI play the {opening_name} with the {color} pieces.")

# Note the argument white is passed to the parameter color
# The argument London is passed to the parameter opening_name
describe_opening("white", "London")
