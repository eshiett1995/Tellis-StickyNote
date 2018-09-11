# Tellis-StickyNote
Sticky node, JQuery Plugin


JQUERY STICKY NOTE PLUGIN FOR YOUR WEB APP;

FEATURES:

1. Maximizable
2. Draggable
3. Minimizable

HOW TO USE:

// 1. Load the script
<script src="tellis-sticky-note.js"></script>

  <script>

      $(document).ready(function(){
        
        //2. call the sticky note object
        var sticky = Tellis_Sticky();

        // 3. initialize the object (this makes the sticky note visible)
        sticky.init();

        // 4. write() method writes a string to the sticky note
        sticky.write("hello Wole, please use me");
        
  
    });

  
 
  </script>

