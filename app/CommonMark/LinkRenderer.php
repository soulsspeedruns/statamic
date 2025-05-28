<?php

namespace App\CommonMark;

use League\CommonMark\Extension\CommonMark\Node\Inline\Link as InlineLink;
use League\CommonMark\Node\Node;
use League\CommonMark\Renderer\ChildNodeRendererInterface;
use League\CommonMark\Renderer\NodeRendererInterface;

class LinkRenderer implements NodeRendererInterface
{
    public function render(Node $node, ChildNodeRendererInterface $childRenderer)
    {
        if (! ($node instanceof InlineLink)) {
            throw new \InvalidArgumentException('Incompatible node type: '.get_class($node));
        }

        return view('markdown.link', [
            'url' => $node->getUrl(),
            'title' => $node->getTitle(),
            'text' => $childRenderer->renderNodes($node->children()),
        ])->render();
    }
}
