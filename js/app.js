jQuery(function()
{
    "use strict";

    function setHeight()
    {
        var documentHeight = $(window).height();
        if (documentHeight > 500)
        {
            $(".wrapper").height(documentHeight);
        }
    }
    setHeight();
    $(window).resize(function()
    {
        setHeight();
    })

	var d = new Date(); d.setDate(d.getDate() + Math.floor(Math.random() * (18)) + 12);
	var ds = ("0" + (d.getMonth() + 1)).slice(-2) + "/" + ("0" + (d.getDate())).slice(-2) + "/" + d.getFullYear();
    $(".countdown").countDown(
    {
        date: ds,
        offset: -8
    }, 
    function() 
    {
		// count elapsed
    });
});