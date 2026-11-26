# Promote make.fun's make-your-own-bounty post on X

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/hitokarumashaki/makefun-x-promote/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/hitokarumashaki/makefun-x-promote/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

An entry for the make.fun bounty
[Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01):
one post of my own on X that quotes make.fun's make-your-own-bounty post,
with a photo of its own attached and my play code in its text. The post is the
entry — this repository only hands in its address.

The post: https://x.com/Wildbuddy88/status/2125933455649153087

It quotes https://x.com/makefunai/status/2124915864336236646, the post where
make.fun announced that anyone can now make a bounty of their own:
describe any task, set the reward and the entry fee, and keep a share of
every fee people pay to enter. Its photo is a picture made for the post
about the $MAKE airdrop, and its text carries the line
`Make your own bounty on @makefunai: https://make.fun/sponsor/new` plus the
play code `makefun-gourd-smoothie-sequin`.

## How places are decided

The house reads the post's counts from X through FxTwitter's public read.
Places go by the post's score, the highest first:

    score = replies + reposts + quotes

Views and likes are read and shown, and move nothing. At the deadline the
house reads every post once more, and that reading decides the places. The
top 50 share $250.

## What this program does

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`, where the gate reads it. That is all
it has to do — nothing the program writes about the post counts, the house
reads the post itself.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this
repository and the transcripts you will upload:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

Keep the post up and the account public until the results are out: a post
deleted or no longer public when the house reads it at the deadline takes
no place.
