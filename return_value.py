# Functions can return values. A return statement uses the keywrod "return"
# "return" returns a value back to the line that called the function
#
def get_grandmasters_name(first_name, last_name):
    full_name = f"{first_name} {last_name}"
    return full_name

grand_master = get_grandmasters_name("Magnus", "Carlsen")
print(grand_master)


