import methods

conn = methods.connect_db(3306, "neckykim", "card_db")
cur = conn.cursor()



file = open("brands_dictionary.txt", "r")
elements = file.readlines()
file.close()

for i in range(0, len(elements)) :
    elements[i] = elements[i].split(",")
    elements[i][1] = elements[i][1].replace("\n", "")

for i in elements:
    sql = ("CREATE TABLE `" + i[0] + "` (" +
            "`card_code` INT(4) UNSIGNED ZEROFILL NOT NULL, " +
            "`benefit_type` CHAR(3) NOT NULL COLLATE 'euckr_korean_ci', " +
            "`benefit_number1` FLOAT NULL DEFAULT NULL, " +
            "`benefit_number2` FLOAT NULL DEFAULT NULL,	" +
            "PRIMARY KEY (`card_code`, `benefit_type`) USING BTREE) " +
            "COLLATE='euckr_korean_ci'" +
            "ENGINE=InnoDB;")

    print(sql)

    try:
        cur.execute(sql)
        conn.commit()
        print("[SUCCESS]", i[0])

    except :
        print("[FAILED]", i[0])

conn.close()