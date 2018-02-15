<?php

/**
 * @file
 * Contains \Drupal\app_services\Controller\APPAPIController.
 */

namespace Drupal\app_services\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Controller routines for app_services routes.
 */
class APPAPIController extends ControllerBase {

  
  /**
   * Callback for `app-api/pages.json` API method.
   * Returns list of templates
   */
  
  public function get_pages( Request $request ) {

    $nids   =  \Drupal::entityQuery('node')->execute();
    $nodes  =  \Drupal\node\Entity\Node::loadMultiple($nids);
    
    $data   = [];
    
    foreach ( $nodes as $node ) {
      $data[] = array( 'uuid'=>$node->uuid(), 'id'=>$node->id(), 'title'=>$node->getTitle() );
    }
    return new JsonResponse($data);
  }
  
 

}
