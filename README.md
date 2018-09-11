
<router>
  <Route comp='homepage' '/'>
       #home 
       #Presentation 
       #CV 
       #portfolio 
       #contact 
   </Route>

<slider>
  <slide>

Host -> 
  FullScreen-slider -> 
        slider-slide  -> 
              #home 
              #Presentation 
              #CV 
              #portfolio 
              #contact 

Navigation Item:
  They should be fixed to the view port/windows and placed in foreground (Container absolute).
  Regarding the Navigation bar or other particulars item, they should be moved outside out the view point when scrolling, and moved in again when reaching a position.

Regarding Navigation Item: Nav, button, return to first slide.. Menu ( Home, Work, etc).



<theglyph-nav slot="foreground">
    <anchor-nav hashpart="0" class="main">
      
        <a href="#home">00<span>home</span></a>
      
        <a href="#about" class="">01<span>about</span></a>
      
        <a href="#features" class="">02<span>features</span></a>
      
        <a href="#clients" class="">03<span>clients</span></a>
      
        <a href="#contact" class="active">04<span>contact</span></a>
      
      <span class="anchor-nav-circle"></span>
    </anchor-nav>

    <theglyph-triangle class="first"></theglyph-triangle>
    <theglyph-triangle class="second"></theglyph-triangle>
    <theglyph-home-extra-cta></theglyph-home-extra-cta>
    <theglyph-navigation-arrow location="rotated"></theglyph-navigation-arrow>
</theglyph-nav>