def make_formatted_name(first_name, last_name):
    full_name = f"{first_name} {last_name}"
    return full_name.title()

while True:
    print("\nenter name")
    f_name = input("First Name:")
    l_name = input("Last Name:")
    
   
   formatted_name = make_formatted_name(f_name, l_name)
    print(f"\nHello, {formatted_name}!")

