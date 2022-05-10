import os
os.system("cls")
os.system("pip install pymysql")
os.system("cls")

import getpass
import string
import random

import methods
import create
import insert
import truncate



my_port = int(input("ENTER PORT NUMBER\n>>> "))

os.system("cls")
my_password = getpass.getpass("ENTER PASSWORD\n>>> ")

try :
    methods.connection_check(my_port, my_password)
except :
    print("[CONNECTION FAILED]")
    print("WRONG PORT NUMBER OR PASSWORD\n")
    exit()

os.system("cls")
print("CHOOSE COMMAND\n")



while True :
    print("[1] CREATE DATABASE")
    print("[2] CREATE BRANDS DICTIONARY TABLE")
    print("[3] CREATE MAIN TABLE")
    print("[4] CREATE BENEFITS TABLE")
    print("[5] INSERT VALUES TO MAIN TABLE")
    print("[6] INSERT VALUES TO BENEFITS TABLE")
    print("[7] TRUNCATE BENEFITS TABLE")
    print("[8] DROP DATABASE")
    print("[X] EXIT\n")

    commands = input(">>> ")

    if commands == "1" :
        methods.create_db(my_port, my_password)
        os.system("cls")
        print("CHOOSE COMMAND\n")

    elif commands == "2" :
        create.brands_dictionary_table(my_port, my_password)
        os.system("cls")
        print("CHOOSE COMMAND\n")
    
    elif commands == "3" :
        create.main_table(my_port, my_password)
        os.system("cls")
        print("CHOOSE COMMAND\n")

    elif commands == "4" :
        create.benefits_table(my_port, my_password)
        os.system("cls")
        print("CHOOSE COMMAND\n")

    elif commands == "5" :
        insert.values_main(my_port, my_password)
        os.system("cls")
        print("CHOOSE COMMAND\n")

    elif commands == "6" :
        insert.values_benefits(my_port, my_password)
        os.system("cls")
        print("CHOOSE COMMAND\n")

    elif commands == "7" :
        os.system("cls")
        print("THIS WILL DELETE ALL VALUES IN TABLES. [Y/N]")
        command2 = input(">>> ")

        if command2 == "Y" or command2 == "y" :
            string_pool = string.ascii_lowercase
            confirm_string = ""
            for i in range(0, 5) :
                confirm_string = confirm_string + random.choice(string_pool)

            os.system("cls")
            print("ENTER THE CHARACTERS BELOW")
            print("[" + confirm_string + "]")
            print("")

            command3 = input(">>> ")

            if command3 == confirm_string :
                truncate.benefit_tables(my_port, my_password)
                os.system("cls")
                print("CHOOSE COMMAND\n")

            else :
                os.system("cls")
                print("WRONG CHARACTERS WERE ENTERED\n")
        
        else :
            os.system("cls")
            print("CHOOSE COMMAND\n")
    
    elif commands == "8" :
        os.system("cls")
        print("THIS WILL DELETE ALL TABLES AND VALUES IN DATABASE. [Y/N]")
        command2 = input(">>> ")

        if command2 == "Y" or command2 == "y" :
            string_pool = string.ascii_lowercase
            confirm_string = ""
            for i in range(0, 5) :
                confirm_string = confirm_string + random.choice(string_pool)

            os.system("cls")
            print("ENTER THE CHARACTERS BELOW")
            print("[" + confirm_string + "]")
            print("")

            command3 = input(">>> ")

            if command3 == confirm_string :
                methods.drop_db(my_port, my_password)
                os.system("cls")
                print("CHOOSE COMMAND\n")
            
            else :
                os.system("cls")
                print("WRONG CHARACTERS WERE ENTERED\n")
        
        else :
            os.system("cls")
            print("CHOOSE COMMAND\n")

    elif commands == "X" or commands == "x" :
        os.system("cls")
        break

    else :
        os.system("cls")
        print("WRONG COMMAND\n")