$(function () {
        $('#carousel-img').carousel();
        $('#menu-nav .navbar-collapse a').click(function (e) {
            var href = $(this).attr('href');
            var tabId = $(this).attr('data-tab');
            if ('#' !== href) {
                e.preventDefault();
                $(document).scrollTop($(href).offset().top - 70);
                if (tabId) {
                    $('#myTab a[href=#' + tabId + ']').tab('show');
                }
            }
        });
        $(function(){
        $(".btn-about").click(function(){
        $("#mymodal").modal("toggle");
    });
  });
})