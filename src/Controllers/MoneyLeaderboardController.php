<?php

namespace Ziven\MoneyLeaderboard\Controllers;

use Flarum\Frontend\Document;
use Psr\Http\Message\ServerRequestInterface;

class MoneyLeaderboardController{
    public function __invoke(Document $document, ServerRequestInterface $request){
        return $document;
    }
}
