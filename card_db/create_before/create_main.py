import methods

conn = methods.connect_db(3306, "neckykim", "card_db")
cur = conn.cursor()



sql = ("CREATE TABLE `main` (" +
            "`card_code` INT(4) UNSIGNED ZEROFILL NOT NULL, " +
            "`card_name` CHAR(50) NULL DEFAULT NULL COLLATE 'euckr_korean_ci', " +
            "`card_company` CHAR(20) NULL DEFAULT NULL COLLATE 'euckr_korean_ci', " +
            "`card_type` CHAR(6) NULL DEFAULT NULL COLLATE 'euckr_korean_ci', " +
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