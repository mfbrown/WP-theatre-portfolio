<?php get_header(); 

	/*

		Template Name: Assistant Resume Page

	*/
?>
	
<div class="row resume-page">


	<?php 
		$image_id = 155;
		$size = full;

		$image_attributes = wp_get_attachment_image_src( $image_id, full, false ); 
		$resume_header = $image_attributes[0];
		$image_meta = wp_prepare_attachment_for_js( $image_id ); 
		$header_caption = $image_meta[8];
		?> 


		<div class="responsive-title">
			<h1 class="subpage-indent"><?php echo $post->post_title; ?></h1>>
		</div>

</div>


<?php // a variation on the WP loop that looks for a custom post type instead. 

$args = array(		//array accepted by WP_Query function
	'post_type' => 'resume',
	'meta_key' => 'year',
	'orderby' => 'meta_value_num',
	'order' => 'DESC', //custom post type - CHANGE TO CUSTOM POST TYPE OF CURRENT PROJECT
	'posts_per_page' => -1
);


$the_query = new WP_Query( $args ); //WP_Query accepts an array called $args
?>
	<div class="row resume-background">
		<div class="row subpage-indent">
			<div class="responsive-subtitle subpage-indent">
				<h3>Assistant Lighting Designer</h3>
			</div>
			<div class="row subpage-indent resume-header">
				<h4 class="small-4 medium-3 columns subpage-indent">Production</h4>
				<h4 class="small-4 medium-5 columns">Company</h4>
				<h4 class="small-4 medium-3 columns">Designer</h4>
				<h4 class="small-4 medium-1 columns show-for-medium-up">Year</h4>
			</div>
			<hr>
		</div>
		<?php if ( have_posts() ) : while( $the_query->have_posts() ) : $the_query->the_post(); ?>

			<?php if (get_field('role') == "Assistant Lighting Designer") { ?>
			
				<div class="row subpage-indent">
					<div class="row subpage-indent resume-rows">
					<p class="small-4 medium-3 columns subpage-indent show-title"><?php the_field('show_name'); ?></p>
					<?php the_field('theatre_website'); ?>
						<p class="small-4 medium-5 columns"><?php the_field('company'); ?>
							<?php if (get_field('theatre')): ?>
								<span class="theatre-space">;<br><?php the_field('theatre'); ?></span>
							<?php endif; ?>
						</p>
					</a>
					<p class="small-4 medium-3 columns"><?php the_field('director'); ?></p>
					<p class="small-4 medium-1 columns show-for-medium-up"><?php the_field('year'); ?></p>
				</div>
				</div>
			<?php } ?>	
	<?php endwhile; endif; 
		wp_reset_query(); 
	?>
	</div>

	<div class="resume-download row subpage-indent">
		<?php if ( have_posts() ) : while( have_posts() ) : the_post(); ?>
			<?php the_content(); ?>
		<?php endwhile; endif; ?>
	</div>





<?php get_footer(); ?>