def get_grandmasters_name(first_name, last_name, middle_name = ''):
    if middle_name:
        full_name = f"{first_name} {middle_name} {last_name}"
    else:
        full_name = f"{first_name} {last_name}"
    return full_name.title()

grand_master = get_grandmasters_name("Bobby", "Fischer", "Juan")
print(grand_master)

