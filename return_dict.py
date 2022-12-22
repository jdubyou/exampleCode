# Functions can return any type of value. Here we return a dictionary object
# Take in first and last name and return it as a dictionary

def build_grandmaster(first_name, last_name):
    gm = {'first': first_name, 'last': last_name}
    return gm
grandmaster = build_grandmaster('Magnus', 'Carlsen')
print(grandmaster)

def build_grandmaster2(first_name, last_name, age=None):
    gm = {'first': first_name, 'last': last_name}
    if age:
        gm['age'] = age
    return gm
grandmaster2 = build_grandmaster2('Magnus', 'Carlsen', 32)
print(grandmaster2)


