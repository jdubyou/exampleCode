
## Reading Files the super simple way
#f = open('states.txt', 'r')
#
#print('the file name:' + f.name) #prints the name
#print('mode:' + f.mode)          #prints the mode. read, write, etc
#f.close()                        #closes the file


## Read using a context manager. The with statement
## allows you to controll scope and closes the file handle for you
## Note: A file handle is a variable that a number that references the file
## in the file system
#with open('states.txt', 'r') as f:
#    stuff = f.read()
#    print(stuff) #print each line of the file, but what if the file is huge

## readlines reads each line and shows a special character
## note the \n (slash N) character. This is the newline character
## Think of new line as hitting enter on your keyboard.
## "Enter" can be processes as \n(slash n) or \n\r(slash n slash r) on some systems
#with open('states.txt', 'r') as f:
#    stuff = f.readlines()
#    print(stuff) #print each line of the file, but what if the file is huge

## Now read just the first line. Each time you call readline, the next line is read
#with open('states.txt', 'r') as f:
#    stuff = f.readline()
#    print(stuff, end='*') #print each line of the file, but what if the file is huge
#    stuff2 = f.readline()
#    print(stuff2)  
#    stuff2 = f.readline()
#    print(stuff2)




##Once the execution pointer reached her the file is closed

## Use a loop to find a specific word

#with open('states.txt', 'r') as f:
#    for line in f:
#        if (line == "Montana\n"):
#                print('found it', end='')
#        #print(line, end='')
#

## We can control how much we read by specifying a number of bytes
#with open('states.txt', 'r') as f:
#    stuff = f.read(8)
#    print(stuff)
#    ## What do you think happens if we call read again with 100 bytes)

## Okay but what if the file is huge, I mean really huge?
## Let's read 100 characters(i.e.bytes at a time)
#with open('states.txt', 'r') as f:
#    sizeOfRead = 100
#
#    stuff = f.read(sizeOfRead) #Use a variabel instead of a hard coded value
#
#    # note that read returns a null/ni character if it reaches the end of the file
#    while len(stuff) > 0:
#        print(stuff)
#        stuff = f.read(sizeOfRead)
#        # what happens if we change sizeOfRead to something small like 10 or 5

## How can I tell where I am. use f.tell()
#with open('states.txt', 'r') as f:
#    stuff = f.read(100)
#    print(f.tell())
#    stuff2 = f.read(15)
#    print(f.tell())
#
## We can goto or "seek" to a position with f.seek()
#with open('states.txt', 'r') as f:
#    sizeToRead = 10 
#    stuff = f.read(sizeToRead)
#    print(stuff)
#    f.seek(4)
#    stuff = f.read(sizeToRead)
#    print(stuff)
##

## What about writing to a file. f.write()
#with open('kes.txt', 'w') as f:
#    f.write('a\r\nl;kdjfhlk;ajdflk;ajk3210471908243790asfkasjh\nkestony testing 123\n')
#

## Let's write our own file copy
with open('states.txt', 'r') as f:
        with open('copyKestonyStates.txt', 'w') as wr:
            for line in f:
                wr.write(line)

