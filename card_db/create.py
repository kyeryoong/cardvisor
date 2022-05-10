import methods
import time



def benefits_table(my_port, my_password):
    conn = methods.connect_db(my_port, my_password)
    cur = conn.cursor()

    file = open("brands_dictionary.txt", "r", encoding="utf-8")
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
    time.sleep(3)



def main_table(my_port, my_password) :
    conn = methods.connect_db(my_port, my_password)
    cur = conn.cursor()

    sql = ("CREATE TABLE `main` (" +
            "`card_code` INT(4) UNSIGNED ZEROFILL NOT NULL, " +
            "`card_name` CHAR(50) NULL DEFAULT NULL COLLATE 'euckr_korean_ci', " +
            "`card_company` CHAR(20) NULL DEFAULT NULL COLLATE 'euckr_korean_ci', " +
            "`card_type` CHAR(6) NULL DEFAULT NULL COLLATE 'euckr_korean_ci', " +
            "`card_link` CHAR(255) NULL DEFAULT NULL COLLATE 'euckr_korean_ci', " +
            "`am` INT(8) NULL, " +
            "`am_f` INT(8) NULL, " +
            "`am_m` INT(8) NULL, " +
            "`bc` INT(8) NULL, " +
            "`bc_g` INT(8) NULL, " +
            "`bc_n` INT(8) NULL, " +
            "`jc` INT(8) NULL, " +
            "`jc_o` INT(8) NULL, " +
            "`jc_g` INT(8) NULL, " +
            "`jc_m` INT(8) NULL, " +
            "`jc_s` INT(8) NULL, " +
            "`kw` INT(8) NULL, " +
            "`kw_j` INT(8) NULL, " +
            "`kw_u` INT(8) NULL, " +
            "`kw_m` INT(8) NULL, " +
            "`ma` INT(8) NULL, " +
            "`ma_p` INT(8) NULL, " +
            "`ma_f` INT(8) NULL, " +
            "`ma_g` INT(8) NULL, " +
            "`ma_n` INT(8) NULL, " +
            "`ma_m` INT(8) NULL, " +
            "`ma_s` INT(8) NULL, " +
            "`ma_i` INT(8) NULL, " +
            "`ow` INT(8) NULL, " +
            "`sa` INT(8) NULL, " +
            "`un` INT(8) NULL, " +
            "`un_n` INT(8) NULL, " +
            "`un_m` INT(8) NULL, " +
            "`up` INT(8) NULL, " +
            "`ur` INT(8) NULL, " +
            "`vs` INT(8) NULL, " +
            "`vs_p` INT(8) NULL, " +
            "`vs_f` INT(8) NULL, " +
            "`vs_g` INT(8) NULL, " +
            "`vs_n` INT(8) NULL, " +
            "`vs_m` INT(8) NULL, " +
            "`vs_s` INT(8) NULL, " +
            "`na` INT(8) NULL, " +
            "`na_f` INT(8) NULL, " +
            "`na_m` INT(8) NULL, " +  
            "PRIMARY KEY (`card_code`) USING BTREE) " +   
            "COLLATE='euckr_korean_ci'" +
            "ENGINE=InnoDB;")

    try :
        cur.execute(sql)
        conn.commit()
        print("[SUCCESS]")

    except :
        print("[FAILED]")

    conn.close()
    time.sleep(3)



def brands_dictionary_table(my_port, my_password) :
    conn = methods.connect_db(my_port, my_password)
    cur = conn.cursor()

    file = open("brands_dictionary.txt", "r", encoding="utf-8")
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
            print("[FAILED]", sql_2)

    conn.close()
    time.sleep(3)