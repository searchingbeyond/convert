<?php
    isset( $_POST ) ? "" : die;
    $type = $_POST['type'];
    $content = $_POST['content'];
    echo "<pre>";
    switch( $type ){
        case "JsonToArray": print_r(json_decode( $content, true) ); break;
        case "ArrayToJson": echo json_encode( $content ); break;
        case "urlencode": echo urlencode( $content ); break;   
        case "urldecode": echo urldecode( $content ); break;
        default:
            echo "数据格式错误";
    } 
    echo "</pre>";
?>
