<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>
			<?php 
					wp_title( '|', true, 'right' ); 
			?>
		</title>
		<?php wp_head(); ?>
	</head>
	<body>
        <nav role="navigation" class="navigation clearfix">
          <div class="navigation-header clearfix">
            <div class="navigation-title-container">
            <h1 class="navigation-title"><a href="/"><?php bloginfo($name); ?>&nbsp;<span class="hide-mobile"><?php bloginfo('description'); ?></span></a></h1>
        <!--    <h1 class="navigation-title title-small">M.F.B.L.D.</h1>-->
            <button class='nav-button'>Menu</button>
          </div>
          <?php // WP NAV Block
                $args = array(
                    'theme_location' => 'top-bar-r',
                    'menu' => 'Main-Menu',
                    'container' => 'false',
                    'menu_class' => 'header-nav-menu',
                    'menu_id' => 'header-nav'
                    );
                wp_nav_menu( $args ); ?>
        </nav>
	<div class="container">
    	<main>