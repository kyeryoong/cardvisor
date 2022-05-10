import methods

conn = methods.connect_db(3306, "neckykim", "card_db")
cur = conn.cursor()

file = open("brands_dictionary.txt", "r")
elements = file.readlines()
file.close()



sql_1 = ("CREATE TABLE `brands_dictionary` (" +
        "`table_name` CHAR(50) NOT NULL COLLATE 'euckr_korean_ci'," +
        "`brand_name` CHAR(50) NULL DEFAULT NULL COLLATE 'euckr_korean_ci'," +
        "PRIMARY KEY (`table_name`) USING BTREE)" +
        "COLLATE='euckr_korean_ci'" + 
        "ENGINE=InnoDB;"
        )

try :
    cur.execute(sql_1)
    conn.commit()
    print("[SUCCESS]", sql_1)
except :
    print("[FAILED]")



for i in range(0, len(elements)) :
    elements[i] = elements[i].split(",")
    elements[i][1] = elements[i][1].replace("\n", "")

    sql_2 = "INSERT INTO `brands_dictionary` VALUES('" + str(elements[i][0]) + "', '" + str(elements[i][1]) + "')"

    try :
        cur.execute(sql_2)
        conn.commit()
        print("[SUCCESS]", sql_2)
    except :
        print("[FAILED]")

conn.close()