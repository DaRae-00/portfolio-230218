import { StaticImageData } from "next/image"
import bot1 from "../asset/image/bots/bot-1.png" 
import bot2 from "../asset/image/bots/bot-2.png" 
import bot3 from "../asset/image/bots/bot-3.png" 
import bot4 from "../asset/image/bots/bot-4.png" 
import bot5 from "../asset/image/bots/bot-5.png" 
import bot6 from "../asset/image/bots/bot-6.png" 
import bot7 from "../asset/image/bots/bot-7.png" 
import bot8 from "../asset/image/bots/bot-8.png" 

import web1 from "../asset/image/webs/tn-1.png"
import web2 from "../asset/image/webs/tn-2.png"
import web3 from "../asset/image/webs/tn-3.png"
import web4 from "../asset/image/webs/tn-4.png"
import web5 from "../asset/image/webs/tn-5.png"
import web7 from "../asset/image/webs/hh-1.png"
import web8 from "../asset/image/webs/hh-2.png"
import web9 from "../asset/image/webs/hh-3.png"
import web10 from "../asset/image/webs/hh-4.png"
import web11 from "../asset/image/webs/hh-5.png"
import web12 from "../asset/image/webs/hh-6.png"

import db1 from "../asset/image/dashboard/db-1.png"
import db2 from "../asset/image/dashboard/db-2.png"
import db3 from "../asset/image/dashboard/db-3.png"

import pm1 from "../asset/image/pm/pm-1.png"
import pm2 from "../asset/image/pm/pm-2.png"
import pm3 from "../asset/image/pm/pm-3.png"
import pm4 from "../asset/image/pm/pm-4.png"
import pm5 from "../asset/image/pm/pm-5.png"
import pm6 from "../asset/image/pm/pm-6.png"


export const bots: Array<{id: number, img: StaticImageData}> = [
    {
        id: 0,
        img: bot8
    },
    {
        id: 1,
        img: bot7
    },
    {
        id: 2,
        img: bot6
    },
    {
        id: 3,
        img: bot5
    },
    {
        id: 4,
        img: bot4
    },
    {
        id: 5,
        img: bot3
    },
    {
        id: 6,
        img: bot2
    },
    {
        id: 7,
        img: bot1
    },
    {
        id: 8,
        img: bot1
    }
]


export const webs: Array<{id: number, img: StaticImageData}> = [
    {
        id: 0,
        img: web1
    },
    {
        id: 1,
        img: web2
    },
    {
        id: 3,
        img: web3
    },
    {
        id: 4,
        img: web4
    },
    {
        id: 5,
        img: web5
    },
    {
        id: 6,
        img: web7
    },
    {
        id: 7,
        img: web8
    },
    {
        id: 8,
        img: web9
    },
    {
        id: 9,
        img: web12
    },
    {
        id: 10,
        img: web11
    },
    {
        id: 11,
        img: web10
    },
]

export const dashboard: Array<{id: number, img: StaticImageData}> = [
    {
        id: 0,
        img: db1
    },
    {
        id: 1,
        img: db2
    },
    // {
    //     id: 2,
    //     img: db3
    // },
]



export const pms: Array<{id: number, img: StaticImageData}> = [
    {
        id: 0,
        img: pm1
    },
    {
        id: 1,
        img: pm2
    },
    {
        id: 2,
        img: pm3
    },
    {
        id: 3,
        img: pm4
    },
    {
        id: 4,
        img: pm5
    },
    {
        id: 5,
        img: pm6
    },
]