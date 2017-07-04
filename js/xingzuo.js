function PostData(action){
    $.ajax({
        type:'POST',
        url:'record.php',
        data:{
            openid: $('#openid').val(),
            action:action
        },
        success:function(result){
            console.log(result);
        },
        dataType:"json"

    });
}

function xingzuodata(pram){
    switch(pram){
        case "Aries":
            return "2";
            break;
        case "Aquarius":
            return "3";
            break;
        case "Cancer":
            return "4";
            break;
        case "Capricorn":
            return "5";
            break;
        case "Gemini":
            return "6";
            break;
        case "Leo":
            return "7";
            break;
        case "Libra":
            return "8";
            break;
        case "Pisces":
            return "9";
            break;
        case "Sagittarius":
            return "10";
            break;
        case "Scorpio":
            return "11";
            break;
        case "Taurus":
            return "12";
            break;
        case "Virgo":
            return "13";
            break;
    }
}
function toggleEl(xingzuo){
    if (xingzuo == "Star") {
        //幸运星17
        PostData(17);
        $('#phone').show();
    } else if (xingzuo == "Rules") {
        //查看规则15
        PostData(15);
        $('#see-rule').show();
    } else if (xingzuo == "Reward") {
        //查看奖励14
        PostData(14);
        $.ajax({
            type: 'POST',
            url: 'reward.php',
            data: {
                openid:userId
            },
            success: function(data){
                if (data.status == 'success') {
                    if (data.reward == 'no') {
                        $('#newbee').show();
                    } else {
                        if(data.reward == 0){
                            $('#invite').show();
                        }else{
                            window.location.href = 'https://'+domain+'/reward.php?cash='+data.reward+"&openid="+userId;
                        }
                    }
                }
            } ,
            dataType: 'json'
        });
    } else {
        //点击星座
        PostData(xingzuodata(xingzuo));
        $('.xingzuo-image').attr('src','');
        var xingzuo_array = {
            'Aquarius':'水瓶座',
            'Aries':'白羊座',
            'Cancer':'巨蟹座',
            'Capricorn':'摩羯座',
            'Gemini':'双子座',
            'Leo':'狮子座',
            'Libra':'天秤座',
            'Pisces':'双鱼座',
            'Sagittarius':'射手座',
            'Scorpio':'天蝎座',
            'Taurus':'金牛座',
            'Virgo':'处女座',
        }
        $('#future-button-text').attr('to-href',xingzuo);
        var xingzuo_name = xingzuo_array[xingzuo];
        $('.xingzuo-title').html(xingzuo_name) ;
        $('.xingzuo-image').attr('src','images/plane/'+xingzuo+'.png');
        toggle();
    }
}

function toggle(){
    $('#myElementId').toggle();
}

function translate(pram){
    switch(pram){
        case "Aries":
            return "21";
            break;
        case "Aquarius":
            return "22";
            break;
        case "Cancer":
            return "23";
            break;
        case "Capricorn":
            return "24";
            break;
        case "Gemini":
            return "25";
            break;
        case "Leo":
            return "26";
            break;
        case "Libra":
            return "27";
            break;
        case "Pisces":
            return "28";
            break;
        case "Sagittarius":
            return "29";
            break;
        case "Scorpio":
            return "30";
            break;
        case "Taurus":
            return "31";
            break;
        case "Virgo":
            return "32";
            break;
    }
}
function IntoNumber(pram){
    switch(pram){
        case "Aries":
            return "33";
            break;
        case "Aquarius":
            return "34";
            break;
        case "Cancer":
            return "35";
            break;
        case "Capricorn":
            return "36";
            break;
        case "Gemini":
            return "37";
            break;
        case "Leo":
            return "38";
            break;
        case "Libra":
            return "39";
            break;
        case "Pisces":
            return "40";
            break;
        case "Sagittarius":
            return "41";
            break;
        case "Scorpio":
            return "42";
            break;
        case "Taurus":
            return "43";
            break;
        case "Virgo":
            return "44";
            break;
    }
}
function intoChinese(pram){
    switch(pram){
        case "Aries":
            return "白羊座";
            break;
        case "Aquarius":
            return "水瓶座";
            break;
        case "Cancer":
            return "巨蟹座";
            break;
        case "Capricorn":
            return "摩羯座";
            break;
        case "Gemini":
            return "双子座";
            break;
        case "Leo":
            return "狮子座";
            break;
        case "Libra":
            return "天秤座";
            break;
        case "Pisces":
            return "双鱼座";
            break;
        case "Sagittarius":
            return "射手座";
            break;
        case "Scorpio":
            return "天蝎座";
            break;
        case "Taurus":
            return "金牛座";
            break;
        case "Virgo":
            return "处女座";
            break;
    }
}
$(function(){
    PostData(1);
    var to_href;
    var textmessage;
    $('#back-index').click(function(){
        toggle();
    });
    // 点击探索未来21-32
    $('#future-button-text').click(function() {
        console.log('shuau');
        $('#myElementId').hide();
        $('#xingzuo-content').show();
        var to_href = $(this).attr('to-href');
        PostData(translate(to_href));
        var content = {
            'Aries': {
                'all-fate': [
                    '<c>羊羊水星开始顺行喽！越来越棒哦，投资理财的小高潮也随之而来，有计划投资的羊羊们，可以开始行动啦，收效会明显高于其他时段哦！</c>',
                ],
                'partner': [
                    '<c>狮子座</c>', '<c>天秤座</c>', '<h>水瓶座</h>', '<g>天蝎座</g>',
                ],
                'money': {
                    'left': [
                        '<p>上半年羊儿的理财运势好像不太理想，很多投资理财产品的收益没有按预期到手吧？进入11月就不同了，经过了前期的训练，羊羊的财运增强了。定期理财、规划储蓄能帮助小羊避免一时冲动带来的判断失当。如果能够购买合适的银行理财产品收益更是棒棒哒，但大风险投资还需谨慎。</p>',
                    ],
                    'right': [
                        '<p>羊儿们还是要好好工作，这是财务基石哦。下半年尤其是年底可以好好期待一下年底的大红包呀。</p>',
                    ]
                },
                'health': [
                    '<c>作为精力十足的羊儿是不是会不时感到疲累呢，你需要给自己的情绪找个合适的宣泄口。年底了，还是进行个全面体检吧。</c>',
                ],
                'method': [
                    '<c>在阳台上悬挂紫色风铃，能够为你招来好运</c>',
                    '<c>能够为你招来好运</c>',
                    '<c>外出时戴上石紫水晶手链</c>',
                    '<c>能帮助你增加好运</c>'
                ],
                'future': [
                    '<p>你是进取型投资者，拥有十足的冲劲和决断力，乐于不断学习投资理财等相关知识，积极积累财富。在理财方面，你清楚地知道信息就是财富，所以在提升自己获取信息能力的同时，不断加强对财富数字的敏感度，提升财富管理及计算的能力。</p>',
                    '<p>作为进取型的你，一定对基金产品早有涉猎，一贯平台为你精选进取型、稳健型和保守型三类基金产品，你可用一小部分资金试水，优化你的投资组合。除此之外，你可以将闲散资金放置在的明星产品“小金贯”中，1000元起投，安全可靠，随存随取，支持多家银行卡在线投资。使你的每一分钱都得到最大收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    '<p>更多的幸运也许就藏在浩瀚的星空里，点击“寻找幸运星”在星空中寻找到属于你的<span>金色幸运星</span>吧。</p>'
                ],
            },
            'Aquarius': {
                'all-fate': [
                    '<c>上半年水瓶宝宝是不是觉得工作上总是不能发挥的得心应手？还好有人帮助，解决起来也不是很难，对吧？11月份，运势越来越好了，事情也越做越顺利，生活的热情也越来越高哦，保持美美的心情吧。</c>',
                ],
                'partner': [
                    '<c>处女座</c>', '<c>射手座</c>', '<h>白羊座</h>', '<g>摩羯座</g>',
                ],
                'money': {
                    'left': [
                        '<p>今年就是给瓶子们理财准备的吧。除了稳定收入，瓶子们还能通过分红和找到新的理财方法来赚钱。让人羡慕死了。稳稳的站在稳定收入的基石上，再从投资上获得收益，钱包胖得可快了。</p>',
                    ],
                    'right': [
                        '<p>瓶子们多听投资方面好友的信息，找到适宜的投资银行理财产品，到年末还有一波进财之运。到时再行动一次，收益会让你笑逐颜开哦。</p>',
                    ]
                },
                'health': [
                    '<c>11月份如果因为工作让你作息不规律，会导致健康下降。不过因为每天健身的原因，影响不会太大。爱美的水瓶宝宝如果去健身，美容会变得更美哟。</c>',
                ],
                'method': [
                    '<c>在阳台上悬挂紫色风铃，</c>',
                    ',c>能够为你招来好运</c>',
                    '<c>外出时戴上石紫水晶手链</c>',
                    '<c>能帮助你增加好运</c>'
                ],
                'future': [
                    '<p>你属于积极型投资者，深谙“理财须趁早”的投资理念。很早就开始试水投资的你，早已积累了相当的理财经验，从不把鸡蛋放在同一个篮子里。多元化的投资理念，不但帮你分散了风险，还形成了良性的理财组合。</p>',
                    '<p>接下来的日子，不愿被束缚的你不妨尝试将闲散资金放置在一贯平台 “小金贯”中，它基于零存活用的生活场景，为你提供1000元起投，安全可靠，随存随取的投资方式，支持多家银行卡在线投资。除此之外，你还可以拿出一小部分资金投入一贯平台的基金产品，任选多种基金进行组合，最大化投资收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    '<p>更多的幸运也许就藏在浩瀚的星空里，点击“寻找幸运星”在星空中寻找到属于你的<span>金色幸运星</span>吧。</p>'
                ],
            },
            'Cancer': {
                'all-fate': [
                    '<c>巨蟹宝宝人品好，有人帮，贵人来，无艰难。11月之后更是人品爆发，多多骚扰死党，人际更顺利，但需注意要多为对方着想哦。俗话说感情像理财，持续投资见回报。</c>',
                ],
                'partner': [
                    '<c>双鱼座</c>', '<c>金牛座</c>', '<h>白羊座</h>', '<g>天蝎座</g>',
                ],
                'money': {
                    'left': [
                        '<p>好多蟹子宝宝购物解压吧？好在花得多，赚的多。会花会赚好榜样。经商的蟹子财运旺，打工的蟹子绩效好，涨工资。真是棒棒哒！</p>',
                    ],
                    'right': [
                        '<p>蟹子宝宝要开源，投资理财获惊喜。投资股票、基金都是蟹子宝宝的首选。冬季财运虽然会进入一段休眠期，但找到好的理财产品，年底的收益也会不俗哦。</p>',

                    ]
                },
                'health': [
                    '<c>蟹子宝宝们太拼了，没时间锻炼吧。太忙了，不好好吃饭和休息吧。好心疼。趁假期好好休息休息，调养一下吧。</c>',

                ],
                'method': [
                    '<c>在阳台上悬挂紫色风铃，能够为你招来好运</c>',
                    '<c>外出时戴上石紫水晶手链</c>',
                    '<c>能帮助你增加好运</c>'
                ],
                'future': [
                    '<p>你是直觉型投资者，对事物的洞察力极强，对财富的直觉也很敏锐，可持续加强对信息的预判性和决断力，以信息生财。如果说投资是进攻，那储蓄就是防守，你适合攻守组合的投资搭配，这样能最佳地平衡你偶尔的冲动投资，也帮助你获取最大化的收益。</p>',
                    '<p>对理财敏锐又有主见的你，对基金产品一定不陌生。不管是稳中求进还是收益为先，你在一贯平台上总能找到一款最适合你的产品。除了多款基金产品供你选择之外，建议你不妨每月将一部分资金投入“周周盈”，作为对基金产品投资的平衡。这款精选的低风险、高收益固定期限金融产品，每周五11点定时发布，1000元起投，年化收益率最高可达5.1%。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    '<p>更多的幸运也许就藏在浩瀚的星空里，点击“寻找幸运星”在星空中寻找到属于你的<span>金色幸运星</span>吧。</p>'
                ]
            },
            'Capricorn': {
                'all-fate': [
                    '<c>沉稳踏实的摩羯上半年空有一腔抱负难发挥，甚至看着很多机会从眼前飘过。难过吧？没事，没事了，下半年渐入佳境哦，准备好妥妥的去迎接好运吧。</c>',
                ],
                'partner': [
                    '<c>双子座</c>',
                    '<c>金牛座</c>',
                    '<h>狮子座</h>',
                    '<g>天蝎座</g>'
                ],
                'money': {
                    'left': [
                        '<p>技术型的大摩羯可以利用新兴产业的文化，网络和教育赚外块，是不是棒棒哒？投资理财来喂胖你的荷包也是好选择，但要发挥大摩羯理性的特长，多分析多判断，帮助自己选择稳健的理财产品。</p>',
                    ],
                    'right': [
                        '<p> 11月摩羯投资的运势不错哦，多打听些好产品，用它们充盈荷包吧。勤奋踏实工作的你，年底会笑的很开心。是不是老板会发大红包呢？</p>',
                    ]
                },
                'health': [
                    '<c>大摩羯工作太拼太认真，很少休息，所以是不是有些疲劳呢？不用太担心，多注意休息就好了。如果因为压力睡不着，睡前喝点儿牛奶有帮助。</c>',
                ],
                'method': [
                    '<c>在阳台上悬挂紫色风铃，能够为你招来好运</c>',
                    '<c>外出时戴上石紫水晶手链</c>',
                    '<c>能帮助你增加好运</c>'
                ],
                'future': [
                    '<p>你属于稳健型投资者，对风险的承受能力相对有限。你的消费习惯使得你的每笔开销都落在实处，在理财方面也是本着“以钱生钱”的原则，一直保持稳健的投资计划，是投资理财的一把好手。具有固定收益的低风险投资组合更合你意。</p>',
                    '<p>作为对理财有规划的你，可尝试一贯平台的固定期限类主打产品“周周盈”进行投资。这是一款精选的低风险、高收益固定期限理财产品，1000元起投，每周五11点定时发布，1000元起投，年化收益率最高可达5.1%。除此之外，若你想保留一部分资金零存活用，还可以尝试随存随取的“小金贯”，1000元起投，收益同样丰厚。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    '<p>更多的幸运也许就藏在浩瀚的星空里，点击“寻找幸运星”在星空中寻找到属于你的<span>金色幸运星</span>吧。</p>'
                ],
            },
            'Gemini': {
                'all-fate': [
                    '<c>双子座这一年好像过山车，尤其上半年堪称跌宕起伏，是不是很刺激啊？进入11月不一样喽，上司器重还晋升，小幸运还时不时的来敲敲门。让人羡慕啊！</c>',
                ],
                'partner': [
                    '<c>摩羯座</c>', '<c>处女座</c>', '<h>射手座</h>', '<g>水瓶座</g>',
                ],
                'money': {
                    'left': [
                        '<p>是不是很多人说双子有两面性，不太会理财，会透支呢？今年财神眷顾哦，守财有方，收入不俗，工作和投资上的投入都能得到同等甚至超出预期的回报。好棒啊，更棒的是升职加薪会让你的小日子变得更加富裕。</p>',
                    ],
                    'right': [
                        '<p>11月还想赚更多吗，那就从朋友那多得些投资理财信息吧，好的理财产品会使财富滚滚而来！</p>',
                    ]
                },
                'health': [
                    '<c>不要加班不睡觉啊，这样身体吃不消，情绪也就不会好，给你个抱抱，好心情哦；胖双子会暴饮暴食，我们心疼你的胃，要多多注意啊。</c>',
                ],
                'method': [
                    '<c>在阳台上悬挂紫色风铃，</c>',
                    '<c>能够为你招来好运</c>',
                    '<c>外出时戴上石紫水晶手链</c>',
                    '<c>能帮助你增加好运</c>'
                ],
                'future': [
                    '<p>你属于积极型投资者，深谙“理财须趁早”的投资理念。很早就开始试水投资的你，早已积累了相当的理财经验，从不把鸡蛋放在同一个篮子里。多元化的投资理念，不但帮你分散了风险，还形成了良性的理财组合。</p>',
                    '<p>接下来的日子，不愿被束缚的你不妨尝试将闲散资金放置在一贯平台 “小金贯”中，它基于零存活用的生活场景，为你提供1000元起投，安全可靠，随存随取的投资方式，支持多家银行卡在线投资。除此之外，你还可以拿出一小部分资金投入一贯平台的基金产品，任选多种基金进行组合，最大化投资收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    '<p>更多的幸运也许就藏在浩瀚的星空里，点击“寻找幸运星”在星空中寻找到属于你的<span>金色幸运星</span>吧。</p>'
                ],
            },
            'Leo': {
                'all-fate': [
                    '<c>狮子座全身上下都散发着太阳的味道。典型的阳光人，进入11月小狮子也要开始旺自己。事业开始大步向前喽。从现在开始，已经没有难事儿能拦住小狮子了哟。小狮子强大的小宇宙大家都能感受到，但切忌太以自我为中心，多替别人着想，大家更爱你哦。</c>',
                ],
                'partner': [
                    '<c>白羊座</c>', '<c>双鱼座</c>', '<h>摩羯座</h>', '<g>射手座<g>',
                ],
                'money': {
                    'left': [
                        '<p>小狮子今年财运旺到没朋友，但要注意越是旺越要稳。以小搏大不可取，稳扎稳打回报大。稳定的工作让狮子们的左口袋丰盈满满，副业也会让右口袋慢慢长胖。小狮子们要想存钱就不能大手大脚啊。切记，切记。如果希望财神爱上你，那就学学理财的知识吧。</p>',
                    ],
                    'right': [
                        '<p>选些稳妥的理财方式要比炒股和黄金更靠谱。小半年小狮子的开支变多了，但好在能通过自己的勤奋让日子过得比较滋润。如果再选择些好的理财产品，11月将让小狮子们笑容满满哟。</p>',
                    ]
                },
                'health': [
                    '<c>百兽之王难免火气大，上火生气，对小狮子们身体不利啊。万一事情太多睡不着，那就要调整一下吧，多运动会对健康有帮助哦。</c>',
                ],
                'method': [
                    '<c>在阳台上悬挂紫色风铃，能够为你招来好运</c>',
                    '<c>外出时戴上石紫水晶手链</c>',
                    '<c>能帮助你增加好运</c>'
                ],
                'future': [
                    '<p>你是进取型投资者，拥有十足的冲劲和决断力，乐于不断学习投资理财等相关知识，积极积累财富。在理财方面，你清楚地知道信息就是财富，所以在提升自己获取信息能力的同时，不断加强对财富数字的敏感度，提升财富管理及计算的能力。</p>',
                    '<p>作为进取型的你，一定对基金产品早有涉猎，一贯平台为你精选进取型、稳健型和保守型三类基金产品，你可用一小部分资金试水，优化你的投资组合。除此之外，你可以将闲散资金放置在的明星产品“小金贯”中，1000元起投，安全可靠，随存随取，支持多家银行卡在线投资。使你的每一分钱都得到最大收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    '<p>更多的幸运也许就藏在浩瀚的星空里，点击“寻找幸运星”在星空中寻找到属于你的<span>金色幸运星</span>吧。</p>'
                ],
            },
            'Libra': {
                'all-fate': [
                    '<c>被负面情绪笼罩的天秤宝宝，11月份小宇宙终于要爆发了，面临许多选择，记得当机立断哦，赶跑负面情绪，才能及时从困境中走出。</c>',
                ],
                'partner': [
                    '<c>金牛座</c>', '<c>白羊座</c>', '<h>双鱼座</h>', '<g>狮子座</g>',
                ],
                'money': {
                    'left': [
                        '<p>天秤宝宝喜欢美好的事物，所以经常会买买买，你的荷包是不是变瘦了呢？投资些保本型的理财产品吧，会对你的收支平衡有帮助。工作收入是财务稳定的基石，想要开源那小型短期投资是首选哦。多找些理财产品吧，这是天秤宝宝收支平衡的好方法。</p>',
                    ],
                    'right': [
                        '<p>11月天秤宝宝有个财运小高峰，快快抓住，赚一笔，做个理财投资小达人。美美哒。</p>',
                    ]
                },
                'health': [
                    '<c>胖宝宝的运动计划可以开始实施了。阴郁的心情可以通过挥洒汗水来驱散，但切记千万不要把坏心情发泄到别人身上，以免伤及他人噢。</c>',
                ],
                'method': [
                    '<c>在阳台上悬挂紫色风铃，能够为你招来好运</c>',
                    '<c>外出时戴上石紫水晶手链</c>',
                    '<c>能帮助你增加好运</c>'
                ],
                'future': [
                    '<p>你属于积极型投资者，深谙“理财须趁早”的投资理念。很早就开始试水投资的你，早已积累了相当的理财经验，从不把鸡蛋放在同一个篮子里。多元化的投资理念，不但帮你分散了风险，还形成了良性的理财组合。</p>',
                    '<p>接下来的日子，不愿被束缚的你不妨尝试将闲散资金放置在一贯平台 “小金贯”中，它基于零存活用的生活场景，为你提供1000元起投，安全可靠，随存随取的投资方式，支持多家银行卡在线投资。除此之外，你还可以拿出一小部分资金投入一贯平台的基金产品，任选多种基金进行组合，最大化投资收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    '<p>更多的幸运也许就藏在浩瀚的星空里，点击“寻找幸运星”在星空中寻找到属于你的<span>金色幸运星</span>吧。</p>'
                ],
            },
            'Pisces': {
                'all-fate': [
                    '<c>11月份，鱼儿的在工作中是不是有点儿累呢？抱抱吧。没关系，好在财运不错哦。本月投资会有收获，而且年底加薪也是妥妥哒。</c>',
                ],
                'partner': [
                    '<c>巨蟹座</c>', '<c>狮子座</c>', '<h>天秤座</h>', '<g>处女座</g>',
                ],
                'money': {
                    'left': [
                        '<p>有些鱼儿喜欢奢侈品，这会让你的荷包缩水的，千万要谨慎哦。如果不是特别信任的朋友，借钱出去也是要小心滴。鱼儿们心地善良，经常帮助别人，这点财神看到咯。</p>',
                    ],
                    'right': [
                        '<p>11月投资理财，运气棒棒哒。如果买股票要听专业人事的建议哦；投资稳健的银行类理财项目会给鱼儿们带来些小惊喜。</p>',
                    ]
                },
                'health': [
                    '<c>鱼儿如果感到体力不支的话，要多做些运动了。有时会有些小毛病，多注意休息，适当添加衣物，没有大碍。</c>',
                ],
                'method': [
                    '<c>在阳台上悬挂紫色风铃，能够为你招来好运</c>',
                    '<c>外出时戴上石紫水晶手链</c>',
                    '<c>能帮助你增加好运</c>'
                ],
                'future': [
                    '<p>你是直觉型投资者，对事物的洞察力极强，对财富的直觉也很敏锐，可持续加强对信息的预判性和决断力，以信息生财。如果说投资是进攻，那储蓄就是防守，你适合攻守组合的投资搭配，这样能最佳地平衡你偶尔的冲动投资，也帮助你获取最大化的收益。</p>',
                    '<p>对理财敏锐又有主见的你，对基金产品一定不陌生。不管是稳中求进还是收益为先，你在一贯平台上总能找到一款最适合你的产品。除了多款基金产品供你选择之外，建议你不妨每月将一部分资金投入“周周盈”，作为对基金产品投资的平衡。这款精选的低风险、高收益固定期限金融产品，每周五11点定时发布，1000元起投，年化收益率最高可达5.1%。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    '<p>更多的幸运也许就藏在浩瀚的星空里，点击“寻找幸运星”在星空中寻找到属于你的<span>金色幸运星</span>吧。</p>'
                ]
            },
            'Sagittarius': {
                'all-fate': [
                    '<c>先抱抱射手座的宝宝们吧，上半年是不是有点儿辛苦。11月份好了，好了，都好了。会去看电影，去K歌，去跳舞，业余生活丰富了。不错哦。抓住秋天的小尾巴，再来个事业小高潮吧。</c>',
                ],
                'partner': [
                    '<c>天蝎座</c>', '<c>水瓶座</c>', '<h>双子座</h>', '<g>天秤座</g>',
                ],
                'money': {
                    'left': [
                        '<p>射手今年对于财务方面非常理性。只要稳住性子，认真分析获得的信息，就会从中获得商机，获取预期利益。节流要做好哦。如果手头宽裕不妨考虑个人投资，这才是让荷包充盈的好方法。</p>',
                    ],
                    'right': [
                        '<p>11月份获取信息抓住机会或许可以在股市上小赚一笔。也有兼职赚钱的机会哦。如果有理财投资经验的朋友指点你，你还能在理财、基金上小有斩获。</p>',
                    ]
                },
                'health': [
                    '<c>射手们是不是觉得精力旺盛啊，学些球类运动是不错的选择。身体倍儿棒，吃嘛嘛香，要靠好牙齿。关注口腔健康也是射手宝宝们要做的事情。</c>',
                ],
                'method': [
                    '<c>在阳台上悬挂紫色风铃，能够为你招来好运</c>',
                    '<c>外出时戴上石紫水晶手链</c>',
                    '<c>能帮助你增加好运</c>'
                ],
                'future': [
                    '<p>你是进取型投资者，拥有十足的冲劲和决断力，乐于不断学习投资理财等相关知识，积极积累财富。在理财方面，你清楚地知道信息就是财富，所以在提升自己获取信息能力的同时，不断加强对财富数字的敏感度，提升财富管理及计算的能力。</p>',
                    '<p>作为进取型的你，一定对基金产品早有涉猎，一贯平台为你精选进取型、稳健型和保守型三类基金产品，你可用一小部分资金试水，优化你的投资组合。除此之外，你可以将闲散资金放置在的明星产品“小金贯”中，1000元起投，安全可靠，随存随取，支持多家银行卡在线投资。使你的每一分钱都得到最大收益。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    '<p>更多的幸运也许就藏在浩瀚的星空里，点击“寻找幸运星”在星空中寻找到属于你的<span>金色幸运星</span>吧。</p>'
                ],
            },
            'Scorpio': {
                'all-fate': [
                    '<c>今年天蝎宝宝真是集万千宠爱于一身啊。心想事成，收获满满让人羡慕啊！起起落落寻常见，11月份，多在幕后做策划，进行稳健的项目和投资会对你有利哟。</c>',
                ],
                'partner': [
                    '<c>射手座</c>', '<c>摩羯座</c>', '<h>巨蟹座</h>', '<g>双子座</g>',
                ],
                'money': {
                    'left': [
                        '<p>蝎子们真是越努力越富有，汗水和付出成正比。上半年学习了理财投资知识，11月份正好实践一下吧。一定会有好回报。蝎子们做些投资规划吧，只要看准产品，做好分散风险处理，就一定会让人羡慕的流口水哦。</p>',
                    ],
                    'right': [
                        '<p>11月份蝎子们有人帮，生意往来，签约合作都顺利，要是再加上购买银行理财产品，你的荷包会变得越来越鼓，让人羡慕得想抱大腿。</p>',
                    ]
                },
                'health': [
                    '<c>11月份如果能坚持运动，免疫力就会好，健康状况上成哟。但是千万要少玩儿手机，如果颈椎不好，我们会心疼哒。</c>',
                ],
                'method': [
                    '<c>在阳台上悬挂紫色风铃，能够为你招来好运</c>',
                    '<c>外出时戴上石紫水晶手链</c>',
                    '<c>能帮助你增加好运</c>'
                ],
                'future': [
                    '<p>你是直觉型投资者，对事物的洞察力极强，对财富的直觉也很敏锐，可持续加强对信息的预判性和决断力，以信息生财。如果说投资是进攻，那储蓄就是防守，你适合攻守组合的投资搭配，这样能最佳地平衡你偶尔的冲动投资，也帮助你获取最大化的收益。</p>',
                    '<p>对理财敏锐又有主见的你，对基金产品一定不陌生。不管是稳中求进还是收益为先，你在一贯平台上总能找到一款最适合你的产品。除了多款基金产品供你选择之外，建议你不妨每月将一部分资金投入“周周盈”，作为对基金产品投资的平衡。这款精选的低风险、高收益固定期限金融产品，每周五11点定时发布，1000元起投，年化收益率最高可达5.1%。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    '<p>更多的幸运也许就藏在浩瀚的星空里，点击“寻找幸运星”在星空中寻找到属于你的<span>金色幸运星</span>吧。</p>'
                ]
            },
            'Taurus': {
                'all-fate': [
                    '<c>牛牛整年的运势都棒棒哒！收入没有太大起伏，但到秋季时财富和事业运将节节攀升哦，前期的各项投资也开始收获了啊！开心伐？</c>',
                ],
                'partner': [
                    '<c>巨蟹座</c>', '<c>天秤座</c>', '<h>处女座</h>', '<g>双鱼座</g>',
                ],
                'money': {
                    'left': [
                        '<p>开源节流是牛儿水草丰盈的重要条件哦，但是上半年开源不理想，让牛儿们错过了一笔财富。下半年踏实工作才是硬道理。由于牛儿踏实肯干，工作中的不定期分红会给你带来惊喜啊！开心吧！节流加上好的银行理财会让钱包慢慢胖起来哦。</p>',
                    ],
                    'right': [
                        '<p>牛儿进入11月有不少额外收入，尤其理财表现不俗。要坚信在理财上的用心播种，会有细水长流的回报噢！</p>',
                    ]
                },
                'health': [
                    '<c>由于工作原因，聚会频繁、啤酒烤串、暴饮暴食对牛儿们的胃和体重不利哦，尤其是对体重偏胖、年龄较大的牛儿来说需更加注意。请牛儿们控制体重，定期体检，保持睡眠。天天好心情。</c>',
                ],
                'method': [
                    '<c>在阳台上悬挂紫色风铃，能够为你招来好运</c>',
                    '<c>外出时戴上石紫水晶手链</c>',
                    '<c>能帮助你增加好运</c>'
                ],
                'future': [
                    '<p>你属于稳健型投资者，对风险的承受能力相对有限。你的消费习惯使得你的每笔开销都落在实处，在理财方面也是本着“以钱生钱”的原则，一直保持稳健的投资计划，是投资理财的一把好手。具有固定收益的低风险投资组合更合你意。</p>',
                    '<p>作为对理财有规划的你，可尝试一贯平台的固定期限类主打产品“周周盈”进行投资。这是一款精选的低风险、高收益固定期限理财产品，1000元起投，每周五11点定时发布，1000元起投，年化收益率最高可达5.1%。除此之外，若你想保留一部分资金零存活用，还可以尝试随存随取的“小金贯”，1000元起投，收益同样丰厚。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    '<p>更多的幸运也许就藏在浩瀚的星空里，点击“寻找幸运星”在星空中寻找到属于你的<span>金色幸运星</span>吧。</p>'
                ],
            },
            'Virgo': {
                'all-fate': [
                    '<c>处女宝宝做事认真，要求完美，自然会得到别人的赏识。11月份开始，客户开始变多了，财运自然也就变好了；但是工作量大了，要好好安排时间。如果想银行账户数字上涨，就找些好的理财产品吧。</c>',

                ],
                'partner': [
                    '<c>水瓶座</c>', '<c>双子座</c>', '<h>金牛座</h>', '<g>巨蟹座</g>',
                ],
                'money': {
                    'left': [
                        '<p>处女宝宝们是不是颜值高，所以财运贵人跟着跑啊。偷偷笑一下。处女宝宝们工资收入稳稳哒，投资运势也不错哦，如果找对好产品，年底收获妥妥哒。</p>',
                    ],
                    'right': [
                        '<p>11月份，事业运涨的让人羡慕哇。不光订单入账大大滴，就连投资理财也好得不要不要哒。想要钱包撑破，快去找些好的理财产品吧。</p>',
                    ]
                },
                'health': [
                    '<c>处女座在11月精力充沛，不但能完成大订单，还有精力健身啊。只是小心运动损伤就可以了。你是少有的健康星座啊！！！</c>',
                ],
                'method': [
                    '<c>在阳台上悬挂紫色风铃，能够为你招来好运</c>',
                    '<c>外出时戴上石紫水晶手链</c>',
                    '<c>能帮助你增加好运</c>'
                ],
                'future': [
                    '<p>你属于稳健型投资者，对风险的承受能力相对有限。你的消费习惯使得你的每笔开销都落在实处，在理财方面也是本着“以钱生钱”的原则，一直保持稳健的投资计划，是投资理财的一把好手。具有固定收益的低风险投资组合更合你意。</p>',
                    '<p>作为对理财有规划的你，可尝试一贯平台的固定期限类主打产品“周周盈”进行投资。这是一款精选的低风险、高收益固定期限理财产品，1000元起投，每周五11点定时发布，1000元起投，年化收益率最高可达5.1%。除此之外，若你想保留一部分资金零存活用，还可以尝试随存随取的“小金贯”，1000元起投，收益同样丰厚。（了解“一贯”平台，点击屏幕右上角。）</p>',
                    '<p>更多的幸运也许就藏在浩瀚的星空里，点击“寻找幸运星”在星空中寻找到属于你的<span>金色幸运星</span>吧。</p>'
                ],
            },
        };
        var result = content[to_href];
        var all_fate = result['all-fate'];
        var partner = result['partner'];
        var money_left = result['money']['left'];
        var money_right = result['money']['right'];
        var health = result['health'];
        var method = result['method'];
        var textmessage = result['future'];
        //初始化
        // $('#content_1 .content-title').html('');
        $('#content_1 .content_style').html('');
        $('#content_1 .content_style c').remove();
        $('#content_1 .content_style g').remove();
        $('#content_1 .content_style h').remove();
        $('#content_2 .content_style c').remove();
        $('#content_2 .content_style p').remove();
        $('.future-text').html('');
        $('.future-text p').remove();
        $('.future-title').html(intoChinese(to_href));
        // $('#content_1 .content-title').html(intoChinese(to_href));

        all_fate.forEach(function (fate) {
            $('#content_1 .all_fortune_content').append(fate);
        });

        partner.forEach(function (list) {
            $('#content_1 .best_patner_content').append(list);
        });
        health.forEach(function (list) {
            $('#content_1 .health_fortune_content').append(list);
        });
        money_left.forEach(function (list) {
            $('#content_2 .money_fortune_content').append(list);
        });
        money_right.forEach(function (list) {
            $('#content_2 .money_fortune_content').append(list);
        });
        textmessage.forEach(function (list) {
            $('.future-text').append(list);
        });
    });
    //点击查看更多33-44
    $('#view').click(function(){
        $('#xingzuo-content').hide();
        $('#future').show();
        PostData(IntoNumber(to_href));
    })
    $('#sure').click(function(){
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        var phone_num=$("#mobile").val();
        if(!myreg.test(phone_num))
        {
            alert('请输入有效的手机号码！');
        }else if (phone_num.length==0) {
            alert('不能为空');
        }else{
            $('.input_tip').hide();
         //   $(this).hide();
         //   $('#get-luck').show();
            $('#ensure').show();
        }
    })
    //查看幸运18

       
    //去注册19
    $('#go-register').click(function(){
        PostData(19);
        window.location.href='https://'+goreg_url+'/starReg/shareRegister.html?uid='+shared_mobile+'&acttype=2007';
    })
    $('.window_close').click(function(){
        $('.new_window').hide();
    })
    //去推荐20
    $('.invite-btn').click(function(){
        PostData(20);
    })
    $('.app_detail').click(function(){
        $('.background-cover').show();
        $('.app_window').show();
    })
    $('.app_close').click(function(){
        $('.background-cover').hide();
        $('.app_window').hide();
    })
    $('.background-cover').click(function(){
        $(this).hide();
        $('.app_window').hide();
    })
    $('.future-to-index').click(function(){
        $('.background-cover').hide();
        $('.app_window').hide();
        $('#future').hide();
        $("#content_1").animate({left:'96px',top:'324px'});
        $("#content_2").animate({left:'126px',top:'224px'});
        $("#content_1").css('z-index','4');
        $("#content_2").css('z-index','3');
        $("#content_2 .content-title").removeClass('title1');
        $("#content_1 .content-title").addClass('title1');
    })
    // $('.my-reveal-modal-bg').click(function(){
    //        $(this).hide();
    //    })
})
function ensurenum() {
    $('#ensure').hide();
    $('#sure').hide();
    getluck();
  //  $('#get-luck').show();
}
function cancelnum() {
    $('#ensure').hide();
}

function getluck() {
    PostData(18);
    var mobile = $('#mobile').val();
    var openid = $('#openid').val();
    $.ajax({
        type: 'POST',
        url: 'luck.php',
        data: {
            mobile:mobile,
            openid:openid
        },
        success: function(data){
            var random = data.data;
            reward = random;
            has_get_reward = 'yes';
            switch (random) {
                case 0:
                    $('#phone').hide();
                    $('#invite').show();
                    break;
                case 1:
                    $('.experience-money').html(3.62);
                    $('#phone').hide();
                    $("#my-experience").show();
                    break;
                case 2:
                    $('.experience-money').html(7.24);
                    $('.use_condition').html("可无条件提现(相当于20000元本金投资"小金贯"的3日收益)");
                    $('.receive_condition').html("领奖条件：无需投资，奖金将于11月20日之前进入你的一贯账户（相当于20000元本金投资"小金贯"的3日收益）。现在就注册“一贯”账户，将你的奖金提取到绑定的银行卡吧（10月28日24：00前绑卡有效）。");
                    $('#phone').hide();
                    $("#my-experience").show();
                    break;
                case 3:
                    $('.experience-money').html(10.86);
                    $('.use_condition').html("可无条件提现(相当于30000元本金投资"小金贯"的3日收益)");
                    $('.receive_condition').html("领奖条件：无需投资，奖金将于11月20日之前进入你的一贯账户（相当于30000元本金投资"小金贯"的3日收益）。现在就注册“一贯”账户，将你的奖金提取到绑定的银行卡吧（10月28日24：00前绑卡有效）。");
                    $('#phone').hide();
                    $("#my-experience").show();
                    break;
                case 4:
                    $('.experience-money').html(18.09);
                    $('.use_condition').html("(相当于50000元本金投资"小金贯"的3日收益)");
                    $('.receive_condition').html("领奖条件： 于10月28日之前注册并绑定一张银行卡，并保持连续2个自然日投资余额皆不低于1000元，即可获得18.09元奖金。奖金将于11月20日之前进入你的一贯账户(相当于50000元本金投资“小金贯”的3日收益)。");
                    $('#phone').hide();
                    $("#my-experience").show();
                    break;
                case 5:
                    $('.experience-money').html(28.95);
                    $('.use_condition').html("(相当于80000元本金投资"小金贯"的3日收益)");
                    $('.receive_condition').html("领奖条件： 于10月28日之前注册并绑定一张银行卡，并保持连续2个自然日投资余额皆不低于1000元，即可获得28.95元奖金。奖金将于11月20日之前进入你的一贯账户(相当于80000元本金投资“小金贯”的3日收益)。");
                    $('#phone').hide();
                    $("#my-experience").show();
                    break;
                case 6:
                    $('.experience-money').html(36.18);
                    $('.use_condition').html("(相当于10万元本金投资"小金贯"的3日收益)");
                    $('.receive_condition').html("领奖条件： 于10月28日之前注册并绑定一张银行卡，并保持连续2个自然日投资余额皆不低于1000元，即可获得36.18元奖金。奖金将于11月20日之前进入你的一贯账户(相当于100000元本金投资“小金贯”的3日收益)。");
                    $('#phone').hide();
                    $("#my-experience").show();
                    break;
                case -7:
                    $('.new_window').show();
                    //window.location.href='/reward';
                    break;
                default:
                    $('#error-info').html(data.message).show();
                    break;
            }
        } ,
        dataType: 'json'
    });
}

function toggleStyle(){
    var y = $('#content_1').offset().left;
    var z = $('#content_2').offset().left;
    var value = y-z;
    if (value<0) {
        $("#content_2").animate({left:'96px',top:'324px'});
        $("#content_1").animate({left:'126px',top:'224px'});
        $("#content_2").css('z-index','4');
        $("#content_1").css('z-index','3');
        $("#content_1 .content-title").removeClass('title1');
        $("#content_2 .content-title").addClass('title1');
        // $("#content_2").css('top','324px');
        // $("#content_1").css('top','224px');
        // $("#content_2").css('left','90px');
        // $("#content_1").css('left','120px');
        //   $("#content_2").css('background','rgba(19,52,113,0.8)');
        //   $("#content_1").css('background','rgba(19,52,113,0.3)');
    }else{
        $("#content_1").animate({left:'96px',top:'324px'});
        $("#content_2").animate({left:'126px',top:'224px'});
        $("#content_1").css('z-index','4');
        $("#content_2").css('z-index','3');
        $("#content_2 .content-title").removeClass('title1');
        $("#content_1 .content-title").addClass('title1');
        // $("#content_1").css('top','324px');
        // $("#content_2").css('top','224px');
        // $("#content_1").css('left','90px');
        // $("#content_2").css('left','120px');
        //  $("#content_1").css('background','rgba(19,52,113,0.8)');
        //  $("#content_2").css('background','rgba(19,52,113,0.3)');
    }
}
var removeLoading = function() {
    var e = document.getElementById('loading');
    e.style.display = "none";
    $('img').css('background-color', 'transparent');
    document.getElementById('tutorial').style.display = "block";
    setTimeout(function () {
        document.getElementById('tutorial').style.display = "none";
    }, 2000);
};

