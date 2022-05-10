import time
import os
import methods



def values_benefits() :
    os.system("cls")

    conn = methods.connect_db(3306, "neckykim", "card_db")
    cur = conn.cursor()

    file = open("benefits.txt", "r")
    elements = file.readlines()
    file.close()

    sql = "SELECT * FROM brands_dictionary;"

    cur.execute(sql)
    sql_temp = list(cur.fetchall())

    brands_dictionary = {}

    for i in sql_temp :
        key = i[1].replace("\r", "")
        value = i[0]

        brands_dictionary[key] = value



    for i in range(0, len(elements)) :
        temp = elements[i].split('\t')

        try :
            temp.remove("\n")
        except :
            pass

        temp = [temp for temp in temp if temp]

        for j in range(0, len(temp)) :
            temp[j] = temp[j].replace('"', '')

        for j in range(1, len(temp)) :
            parsed_temp = methods.benefit_parser(temp[j])

            if parsed_temp != None :
                if parsed_temp[0] in brands_dictionary :
                    sql = ("INSERT INTO `card_db`.`" + brands_dictionary.get(parsed_temp[0]) + "` VALUES ('" 
                    + temp[0] + "', '" + parsed_temp[1] + "', '" + parsed_temp[2] + "', '" + parsed_temp[3] + "');")

                    try :
                        cur.execute(sql)
                        conn.commit()
                        print("[SUCCESS]", sql)
                    except :
                        print("[FAILED]", sql)

        time.sleep(0.5)

    conn.close()



def values_main() :
    os.system("cls")

    conn = methods.connect_db(3306, "neckykim", "card_db")
    cur = conn.cursor()

    file = open("card_info.txt", "r", encoding="utf8")
    elements = file.readlines()
    file.close()

    temp = []

    for i in range(0, len(elements)) :
        temp.append(list(elements[i].split("\t")))

    for i in range(0, len(temp)) :
        for j in range(0, len(temp[i])) :
            temp[i][j] = temp[i][j].replace("\n", "")
            
    for i in temp :
        card_code = i[0]
        card_name = i[1]
        card_company = i[2]
        card_type = i[3]

        am = -1
        am_f = -1
        am_m = -1
        bc = -1
        bc_g = -1
        bc_n = -1
        jc = -1
        jc_o = -1
        jc_g = -1
        jc_m = -1
        jc_s = -1
        kw = -1
        kw_j = -1
        kw_u = -1
        kw_m = -1
        ma = -1
        ma_p = -1
        ma_f = -1
        ma_g = -1
        ma_n = -1
        ma_m = -1
        ma_s = -1
        ma_i = -1
        ow = -1
        sa = -1
        un = -1
        un_n = -1
        un_m = -1
        up = -1
        ur = -1
        vs = -1
        vs_p = -1
        vs_f = -1
        vs_g = -1
        vs_n = -1
        vs_m = -1
        vs_s = -1
        na = -1
        na_f = -1
        na_m = -1


        temp2 = i[4:]

        for j in range(0, int(len(temp2) / 2)) :
            fee_company = temp2[2 * j]
            fee_amount = temp2[2 * j + 1]

            if fee_company != "" :
                if fee_company == "AMEX" :
                    value = fee_amount

                elif fee_company == "AMEX(가족)" :
                    am_f = fee_amount

                elif fee_company == "AMEX(모바일단독)" :
                    am_m = fee_amount

                elif fee_company == "BC" :
                    bc = fee_amount

                elif fee_company == "BC Global" :
                    bc_g = fee_amount

                elif fee_company == "BC(국내전용)" :
                    bc_n = fee_amount

                elif fee_company == "JCB" :
                    jc = fee_amount

                elif fee_company == "JCB(One Way)" :
                    jc_o = fee_amount
                    
                elif fee_company == "JCB(골드)" :
                    jc_g = fee_amount

                elif fee_company == "JCB(모바일단독)" :
                    jc_m = fee_amount

                elif fee_company == "JCB(실버)" :
                    jc_s = fee_amount

                elif fee_company == "K-World" :
                    kw = fee_amount

                elif fee_company == "K-World(JCB)" :
                    kw_j = fee_amount

                elif fee_company == "K-World(UPI)" :
                    kw_u = fee_amount

                elif fee_company == "K-World(모바일단독)" :
                    kw_m = fee_amount

                elif fee_company == "Master" :
                    ma = fee_amount
                    
                elif fee_company == "Master(Platinum)" :
                    ma_p = fee_amount

                elif fee_company == "Master(가족)" :
                    ma_f = fee_amount

                elif fee_company == "Master(골드)" :
                    ma_g = fee_amount

                elif fee_company == "Master(국내외겸용)" :
                    ma_n = fee_amount

                elif fee_company == "Master(모바일단독)" :
                    ma_m = fee_amount

                elif fee_company == "Master(실버)" :
                    ma_s = fee_amount

                elif fee_company == "Master(해외전용)" :
                    ma_i = fee_amount

                elif fee_company == "One Way" :
                    ow = fee_amount

                elif fee_company == "S&" :
                    sa = fee_amount

                elif fee_company == "Union Pay" :
                    un = fee_amount

                elif fee_company == "Union Pay(국내전용)" :
                    un_n = fee_amount

                elif fee_company == "Union Pay(모바일단독)" :
                    un_m = fee_amount

                elif fee_company == "UPI" :
                    up = fee_amount

                elif fee_company == "URS" :
                    ur = fee_amount

                elif fee_company == "VISA" :
                    vs = fee_amount

                elif fee_company == "VISA(Platinum)" :
                    vs_p = fee_amount

                elif fee_company == "VISA(가족)" :
                    vs_f = fee_amount

                elif fee_company == "VISA(골드)" :
                    vs_g = fee_amount
                    
                elif fee_company == "VISA(국내외겸용)" :
                    vs_n = fee_amount

                elif fee_company == "VISA(모바일단독)" :
                    vs_m = fee_amount

                elif fee_company == "VISA(실버)" :
                    vs_s = fee_amount

                elif fee_company == "국내전용" :
                    na = fee_amount

                elif fee_company == "국내전용(가족)" :
                    na_f = fee_amount

                elif fee_company == "국내전용(모바일단독)" :
                    na_m = fee_amount

        pre_sql = ("'" + card_code + "', '" + 
            card_name + "', '" + 
            card_company + "', '" + 
            card_type + "', '" + 
            str(am) + "', '" + 
            str(am_f) + "', '" + 
            str(am_m) + "', '" + 
            str(bc) + "', '" + 
            str(bc_g) + "', '" + 
            str(bc_n) + "', '" + 
            str(jc) + "', '" + 
            str(jc_o) + "', '" + 
            str(jc_g) + "', '" + 
            str(jc_m) + "', '" + 
            str(jc_s) + "', '" + 
            str(kw) + "', '" + 
            str(kw_j) + "', '" + 
            str(kw_u) + "', '" + 
            str(kw_m) + "', '" + 
            str(ma) + "', '" + 
            str(ma_p) + "', '" + 
            str(ma_f) + "', '" + 
            str(ma_g) + "', '" + 
            str(ma_n) + "', '" + 
            str(ma_m) + "', '" + 
            str(ma_s) + "', '" + 
            str(ma_i) + "', '" + 
            str(ow) + "', '" + 
            str(sa) + "', '" + 
            str(un) + "', '" + 
            str(un_n) + "', '" + 
            str(un_m) + "', '" + 
            str(up) + "', '" + 
            str(ur) + "', '" + 
            str(vs) + "', '" + 
            str(vs_p) + "', '" + 
            str(vs_f) + "', '" + 
            str(vs_g) + "', '" + 
            str(vs_n) + "', '" + 
            str(vs_m) + "', '" + 
            str(vs_s) + "', '" + 
            str(na) + "', '" + 
            str(na_f) + "', '" + 
            str(na_m))

        sql = ("INSERT INTO `card_db`.`main` VALUES(" + pre_sql + "');")

        try :
            cur.execute(sql)
            conn.commit()
            print("[SUCCESS]", sql)

        except :
            print("[FAILED]", sql)

    conn.close()