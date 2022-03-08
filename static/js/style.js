
// $(document).ready(function(){
//     $("#but_search").click(function () {
//       var item_search = $("#search_btn").val();
//       console.log(item_search);

//     //   $.ajax({
//     //       url: "/",
//     //       type: 'get',
//     //       data: {
//     //           item_search:item_search
//     //       },

//     //     //   beforeSend:function(response){
//     //     //       $('.loader').show();
//     //     //   },
//     //     //   success:function(response){
//     //     //       $('.response').empty();
//     //     //       $('.response').append(response)
//     //     //   },
//     //     //   complete:function(data){
//     //     //       $('.loader').hide();
//     //     //   }   

//     //   })
//         if (item_search == ''){
//             $(".srch_gif").removeClass('d-none')
//         } else {
//             $(".srch_gif").addClass('d-none');
//         }
//         });
// })



// // // $(document).on("click", "#search_btn", function (event) {
// // //     var item_search = $(this).val();
// // //     console.log(item_search)
// // // });

console.log('hello')
const loading = document.getElementById('loader')
const all_data = document.getElementById("images")

$.ajax({
    url: '/',
    type: 'GET',
    success: function(res){
        console.log('suucess');
        

    },
    error:function(es){
        console.log('error')
    },
})



