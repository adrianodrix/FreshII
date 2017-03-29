<?php

$this->post('/register', 'Auth\AuthController@register');
$this->post('/login', 'Auth\AuthController@login');

$this->group(['middleware' => 'jwt.auth'], function () {
    $this->get('/me', 'Auth\AuthController@user');
    $this->post('/logout', 'Auth\AuthController@logout');
    $this->get('/timeline', 'TimelineController@index');
});
