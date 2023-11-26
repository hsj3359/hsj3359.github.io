document.getElementById("change").onclick = function(){
    var data = document.getElementById("data").value.split("\n")
    var num = 0
    var typeLTE = ['신비3','A245','A235','A135','M120','G525']
    var openingNum = 0
    var releaseNum=0
    var lteNum = 0
    var fiveGNum = 0

    var newNum = 0
    var mnpNum =0
    var changeNum = 0

    var iphoneNum = 0
    var folderNum =0
    var s23Num = 0
    var m336Num =0
    var m336MomNum =0
    var a235Num = 0
    var a245Num=0
    var m120Num = 0

    var openingFlag = false

    for(var i =0; i<data.length; i++){
        var temp = data[i].split('/')
        if(data[i].search("유선")>=0){
            break;
        }
        if(data[i].search("▪")>=0){
            num=0
            continue;
        }
        if(data[i].search('-')>=0){continue;}
        if(data[i]==''){continue;}
        if(temp.length<2){
            continue;
        }
        for(var j =0; j<temp.length; j++){

        
            //개통 or 출고
            if(temp[j]=="⭕️"){
                openingNum = openingNum+1
                openingFlag= true
            }

            if(temp[j].toUpperCase().search("AIP15")>=0){iphoneNum = iphoneNum+1}
            else if(temp[j].toUpperCase().search("F731")>=0){folderNum = folderNum+1}
            else if(temp[j].toUpperCase().search("F946")>=0){folderNum = folderNum+1}
            else if(temp[j].toUpperCase().search("S911")>=0){s23Num = s23Num+1}
            else if(temp[j].toUpperCase().search("S916")>=0){s23Num = s23Num+1}
            else if(temp[j].toUpperCase().search("S918")>=0){s23Num = s23Num+1}
            else if(temp[j].toUpperCase().search("M336")>=0){
                if (temp[j].toUpperCase().search("M336맘")>=0){
                    m336MomNum = m336MomNum+1
                }
                else{
                    m336Num = m336Num+1
                }
            }
            else if(temp[j].toUpperCase().search("A245")>=0){a245Num = a245Num+1}
            else if(temp[j].toUpperCase().search("A235")>=0){a235Num = a235Num+1}
            else if(temp[j].toUpperCase().search("M120")>=0){m120Num = m120Num+1}

            for(var k=0; k<typeLTE.length; k++){
               if(temp[j].toUpperCase()==typeLTE[k]){
                lteNum= lteNum+1
                break;
               }
            }
             // 개통유형
             if(temp[j].toUpperCase()=="M"){mnpNum = mnpNum+1}
             else if(temp[j]=="기"){changeNum = changeNum+1}
             else if(temp[j]=="신"||temp[j]=="신규"){newNum = newNum +1}
            
        }
        fiveFlag = true
        if(!openingFlag){
            releaseNum = releaseNum+1
            console.log(data[i])
        }
        else{openingFlag=false}




        }

        





    var left = Number(document.getElementById('target').value) -(openingNum+releaseNum)
    var a = a235Num+a245Num
    fiveGNum = openingNum+releaseNum-lteNum

    var m1 = "제주도매센터 출고보고\n\n"
    var m2 ='◼ 총량\n'
    var m3 = '목표/개통/출고/잔여\n'
    var m4 = document.getElementById('target').value + '/'+openingNum+"/"+releaseNum+"/"+left+"\n\n"
    var m5 = "◼ 세대별\n"
    var m6 = "- 5G : "+fiveGNum+" / LTE : "+lteNum+"\n\n"
    var m7 = "◼ 개통유형별\n"
    var m8 = "010/MNP/기변\n"
    var m9 = newNum+"/"+mnpNum+"/"+changeNum+"\n\n"
    var m10 = "◼ 그외 모델별\n"
    var m11 ="- 아15류 : "+iphoneNum+"\n"
    var m12 ="- 폴더블5 : "+folderNum+"\n"
    var m13 ='- 갤23 : '+s23Num+'\n'
    var m14 ='- M336(맘) : '+m336Num+'('+m336MomNum+')\n'
    var m15 ='- A23,45 : '+a+'\n'
    var m16 ='- M120 : '+m120Num+'\n'






    document.getElementById('result').value = m1+m2+m3+m4+m5+m6+m7+m8+m9+m10+m11+m12+m13+m14+m15+m16





}