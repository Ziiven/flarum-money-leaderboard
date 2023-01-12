<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('users', function(Blueprint $table){
            $table->index('money');
        });
    },
    'down' => function (Builder $schema) {
        
    },
];
