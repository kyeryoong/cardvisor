import methods
import time



def benefit_tables (my_port, my_password) :
    conn = methods.connect_db(my_port, my_password)
    cur = conn.cursor()

    file = open("brands_dictionary.txt", "r")
    elements = file.readlines()
    file.close()

    for i in range(0, len(elements)) :
        elements[i] = elements[i].split(",")
        elements[i][1] = elements[i][1].replace("\n", "")

    for i in elements:
        sql = ("TRUNCATE TABLE `" + i[0] + "`;")

        try:
            cur.execute(sql)
            conn.commit()
            print("[SUCCESS]", i[0])

        except :
            print("[FAILED]", i[0])

    conn.close()
    time.sleep(3)