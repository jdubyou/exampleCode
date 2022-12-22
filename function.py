# This funciton now expects user name as an imput parameter
# greet_user will now print out the user's name
# Note that "username" is considered a parameter
def greet_user(username):
    print(f"hello, {username.title()}!")

# james in this context is considered an argument passed to a function
# This allows the function to do it's work
greet_user("james")
