import pymysql
import os
import time


hostname = "localhost"
username = "root"
databasename = "card_db"



def connection_check (my_port, my_password) :
    os.system("cls")

    conn = pymysql.connect(
        host = hostname,
        port = my_port,
        user = username,
        password = my_password,
        charset = "utf8")

    cur = conn.cursor()
    cur.execute("SHOW DATABASES;")

    print("[CONNECTED]")
    time.sleep(1)
    conn.commit()
    conn.close()


def create_db (my_port, my_password) :
    os.system("cls")

    conn = pymysql.connect(
        host = hostname,
        port = my_port,
        user = username,
        password = my_password,
        charset = "utf8")

    cur = conn.cursor()
    cur.execute("CREATE DATABASE " + databasename + ";")

    print("[PLEASE WAIT]")
    time.sleep(3)
    conn.commit()
    conn.close()



def drop_db (my_port, my_password) :
    os.system("cls")

    conn = pymysql.connect(
        host = hostname,
        port = my_port,
        user = username,
        password = my_password,
        charset = "utf8")

    cur = conn.cursor()
    cur.execute("DROP DATABASE " + databasename + ";")

    print("[PLEASE WAIT]")
    time.sleep(3)
    conn.commit()
    conn.close()



def connect_db (my_port, my_password) :
    os.system("cls")

    return pymysql.connect(
        host = hostname,
        port = my_port,
        user = username,
        password = my_password,
        db = databasename,
        charset = "utf8")
    
    

def benefit_parser(sentence):
    numbers = []
    brand_name = sentence[0: sentence.find("에서")]
    sentence_wo = sentence[sentence.find("에서") + 3:]
    sentence_splited = list(sentence_wo.split())

    try:
        if ("1리터당" in sentence_wo) and ("청구 할인" in sentence_wo):
            sentence_splited.remove("1리터당")

            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace(",", ""))

            benefit_type = "LBD"
            number_1 = numbers[0]
            number_2 = 0

        elif ("1리터당" in sentence_wo) and ("즉시 할인" in sentence_wo):
            sentence_splited.remove("1리터당")

            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace(",", ""))

            benefit_type = "LID"
            number_1 = numbers[0]
            number_2 = 0

        elif ("1리터당" in sentence_wo) and ("캐시백" in sentence_wo):
            sentence_splited.remove("1리터당")

            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace(",", ""))

            benefit_type = "LCB"
            number_1 = numbers[0]
            number_2 = 0

        elif ("1리터당" in sentence_wo) and ("적립" in sentence_wo):
            sentence_splited.remove("1리터당")

            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace(",", ""))

            benefit_type = "LGP"
            number_1 = numbers[0]
            number_2 = 0

        elif ("1리터당" in sentence_wo) and ("할인" in sentence_wo):
            sentence_splited.remove("1리터당")

            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace(",", ""))

            benefit_type = "LND"
            number_1 = numbers[0]
            number_2 = 0

        elif ("원당" in sentence_wo) and ("적립" in sentence_wo):
            number_1 = sentence_splited[0].replace("원당", "").replace(",", "")

            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i)

            benefit_type = "FGP"
            number_2 = numbers[1]

        elif ("원당" in sentence_wo) and ("청구 할인" in sentence_wo):
            number_1 = sentence_splited[0].replace("원당", "").replace(",", "")

            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i)

            benefit_type = "FBD"
            number_2 = numbers[1]

        elif ("원당" in sentence_wo) and ("즉시 할인" in sentence_wo):
            number_1 = sentence_splited[0].replace("원당", "").replace(",", "")

            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i)

            benefit_type = "FID"
            number_2 = numbers[1]

        elif ("원당" in sentence_wo) and ("할인" in sentence_wo):
            number_1 = sentence_splited[0].replace("원당", "").replace(",", "")

            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i)

            benefit_type = "FND"
            number_2 = numbers[1]

        elif ("%" in sentence_wo) and ("적립" in sentence_wo):
            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace("%", ""))

            benefit_type = "PGP"
            number_1 = numbers[0]
            number_2 = 0

        elif not("원당" in sentence_wo) and not("%" in sentence_wo) and ("적립" in sentence_wo):
            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace(",", ""))

            benefit_type = "NGP"
            number_1 = numbers[0]
            number_2 = 0

        elif ("%" in sentence_wo) and ("청구 할인" in sentence_wo):
            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace("%", ""))

            benefit_type = "PBD"
            number_1 = numbers[0]
            number_2 = 0

        elif ("%" in sentence_wo) and ("즉시 할인" in sentence_wo):
            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace("%", ""))

            benefit_type = "PID"
            number_1 = numbers[0]
            number_2 = 0

        elif ("%" in sentence_wo) and ("할인" in sentence_wo):
            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace("%", ""))

            benefit_type = "PND"
            number_1 = numbers[0]
            number_2 = 0

        elif ("원" in sentence_wo) and ("청구 할인" in sentence_wo):
            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace(",", ""))

            benefit_type = "WBD"
            number_1 = numbers[0]
            number_2 = 0

        elif ("원" in sentence_wo) and ("즉시 할인" in sentence_wo):
            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace(",", ""))

            benefit_type = "WID"
            number_1 = numbers[0]
            number_2 = 0

        elif ("원" in sentence_wo) and ("할인" in sentence_wo):
            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace(",", ""))

            benefit_type = "WND"
            number_1 = numbers[0]
            number_2 = 0

        elif ("%" in sentence_wo) and ("캐시백" in sentence_wo):
            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace("%", ""))

            benefit_type = "PCB"
            number_1 = numbers[0]
            number_2 = 0

        elif ("원" in sentence_wo) and ("캐시백" in sentence_wo):
            for i in sentence_splited:
                if not(i.isalpha()):
                    numbers.append(i.replace(",", ""))

            benefit_type = "WCB"
            number_1 = numbers[0]
            number_2 = 0

        else:
            pass

        return [brand_name, benefit_type, str(number_1), str(number_2)]

    except:
        pass