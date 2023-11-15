document.getElementById("change").onclick = function(){
    var data = document.getElementById("data").value.split("\n")
    var num = 0
    var type = ''
    var typeLTE = ['신비3','A245','A235','A135','M120']
    var opening = 0
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

    var proOtherNum = 0
    var otherNum = 0
    var ourNum =0
    var proOurNum = 0

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
        for(var j =0; j<temp.length; j++){
            if(j==1){
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
                    type = 'lte'
                    break;
                   }
                }
                if(type==''){fiveGNum = fiveGNum+1}
                else{type=''}
                
            }

            if(j==2){
                if(temp[j].toUpperCase()=="M"){mnpNum = mnpNum+1}
                else if(temp[j]=="기"){changeNum = changeNum+1}
                else if(temp[j]=="신"||temp[j]=="신규"){newNum = newNum +1}
            }
            if(temp[j]=="⭕️"){
                console.log('들어왓음')
                openingNum = openingNum+1
            }
            if(temp[j]=="자사"){
                if(temp[1].toUpperCase().search("AIP15P")>=0){
                    proOurNum= proOurNum+1
                }
                else{ourNum= ourNum+1}
            }
            else if(temp[j]=="타사"){
                if(temp[1].toUpperCase().search("AIP15P")>=0){
                    proOtherNum=  proOtherNum+1
                }
                else{otherNum= otherNum+1}
            }
        }
        



    }



    var oeif = "제주도매센터 출고보고\n\n"
    var temp1 = '개통:'+openingNum+"\n"
    var temp2 = '5g:'+fiveGNum+"\t"+'lte:'+lteNum+"\n"
    var temp3 = '010:'+newNum+'\t mnp:'+mnpNum+"\t 기변:"+changeNum+"\n"
    var temp4 = "아15:" + iphoneNum+"\n"
    var temp5 = "폴더블:" + folderNum+"\n"
    var temp6 = "갤23:" + s23Num+"\n"
    var temp7 = "m336:" + m336Num+"\n"
    var temp8 = "m336맘:" + m336MomNum+"\n"
    var temp9 = "a235:" + a235Num+"\n"
    var temp10 = "a245:" + a245Num+"\n"
    var temp11 = "m120:" + m120Num+"\n"


    document.getElementById('result').value = temp1+temp2+temp3+temp4+temp5+temp6+temp7+temp8+temp9+temp10+temp11





}