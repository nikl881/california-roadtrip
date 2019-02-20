describe('click on button', function () {

      it('shows changes to the inn-menu image via selector when button is clicked', function () {

          var menuIconClicked, menuChangesWhenClicked = false;  
 
          $(".Inn").click(function(){
            $(this).data('clicked', true);
            if($(this).data('clicked')) {
                menuIconClicked=true 
                 if (menuIconClicked && $('body').hasClass(null)) {
                    menuChangesWhenClicked=true;
          }
            }
        
        });
            expect(menuChangesWhenClicked).toBe(true);
      });
});