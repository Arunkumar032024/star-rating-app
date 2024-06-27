$(document).ready(function(){
    

    // code for star rating
    let rate = 0;

    $("#s1").on({
        'click': function (){
            rate = 1;   
            console.log(rate);
            if(rate === 1){
                $("#s1").css({color: "#F4CE14"})
                $("#s2, #s3, #s4, #s5").css({color: "#45474B"})
            }
        },
        'mouseover': function(){
            $("#s1").css({color: "#F4CE14"})
        },
        'mouseleave': function(){
            (rate !== 1) ? $("#s1").css({color: "#45474B"}) : null;
            
        },
        
    })
    $("#s2").on({
        'click': function (){
            rate = 2;   
            console.log(rate);
            if(rate === 2){
                $("#s1, #s2").css({color: "#F4CE14"})
                $("#s3, #s4, #s5").css({color: "#45474B"})
            }
        },
        'mouseover': function(){
            $("#s1, #s2").css({color: "#F4CE14"})
        },
        'mouseleave': function(){
            (rate !== 2) ? $("#s1, #s2").css({color: "#45474B"}) : null;
        },
    })
    $("#s3").on({
        'click': function (){
            rate = 3;   
            console.log(rate)
            if(rate === 3){
                $("#s1, #s2, #s3").css({color: "#F4CE14"})
                $("#s4, #s5").css({color: "#45474B"})
            }
        },
        'mouseover': function(){
            $("#s1, #s2, #s3").css({color: "#F4CE14"})
        },
        'mouseleave': function(){
            (rate !== 3) ? $("#s1, #s2, #s3").css({color: "#45474B"}) : null;
        },
    })
    $("#s4").on({
        'click': function (){
            rate = 4;   
            console.log(rate)
            if(rate === 4){
                $("#s1, #s2, #s3, #s4").css({color: "#F4CE14"})
                $("#s5").css({color: "#45474B"})
            }
        },
        'mouseover': function(){
            $("#s1, #s2, #s3, #s4").css({color: "#F4CE14"})
        },
        'mouseleave': function(){
            (rate !== 4) ? $("#s1, #s2, #s3, #s4").css({color: "#45474B"}) : null;
        },
    })
    $("#s5").on({
        'click': function (){
            rate = 5;   
            console.log(rate)
            if(rate === 5){
                $("#s1, #s2, #s3, #s4, #s5").css({color: "#F4CE14"})
            }
        },
        'mouseover': function(){
            $("#s1, #s2, #s3, #s4, #s5").css({color: "#F4CE14"})
        },
        'mouseleave': function(){
            (rate !== 5) ? $("#s1, #s2, #s3, #s4, #s5").css({color: "#45474B"}) : null;
        },
    })

    const starRateBtn = $(".star-rating-container #submit");
    
    starRateBtn.click(function(){
        if(rate !== 0){
            $(this).hide();
            $("#s1, #s2, #s3, #s4, #s5").css('pointer-events', 'none');
            $(".feedback").removeClass('hide');
        }else{
            $('.star-error').removeClass('hide')
            $('.star-error').text('Please select a rating')
            setTimeout(()=>{
                $('.star-error').addClass('hide')
            }, 1000)
        }
    })
    // End code for star rating
})