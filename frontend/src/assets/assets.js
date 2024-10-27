import mtb_1 from "./mtb_1.jpg"
import mtb_1_1 from "./mtb_1_1.jpg"
import mtb_1_2 from "./mtb_1_2.jpg"
import mtb_1_3 from "./mtb_1_3.jpg"
import mtb_2 from "./mtb_2.jpg"
import mtb_2_1 from "./mtb_2_1.jpg"
import mtb_2_2 from "./mtb_2_2.jpg"
import mtb_2_3 from "./mtb_2_3.jpg"
import mtb_3 from "./mtb_3.jpg"
import mtb_3_1 from "./mtb_3_1.jpg"
import mtb_3_2 from "./mtb_3_2.jpg"
import mtb_3_3 from "./mtb_3_3.jpg"
import mtb_4 from "./mtb_4.png"
import mtb_4_1 from "./mtb_4_1.jpg"
import mtb_4_3 from "./mtb_4_3.jpg"
import mtb_4_4 from "./mtb_4_4.jpg"
import gravel_1 from "./gravel_1.jpg"
import gravel_1_1 from "./gravel_1_1.jpg"
import gravel_1_2 from "./gravel_1_2.jpg"
import gravel_2 from "./gravel_2.jpg"
import gravel_2_1 from "./gravel_2_1.jpg"
import gravel_2_2 from "./gravel_2_2.jpg"
import gravel_2_3 from "./gravel_2_3.jpg"
import gravel_3 from "./gravel_3.jpg"
import gravel_3_1 from "./gravel_3_1.jpg"
import fork_1 from "./fork_1.jpg"
import fork_1_1 from "./fork_1_1.jpg"
import fork_1_2 from "./fork_1_2.jpg"
import fork_2 from "./fork_2.jpg"
import fork_2_1 from "./fork_2_1.jpg"
import shock_1 from "./shock_1.jpg"
import shock_1_1 from "./shock_1_1.jpg"
import p2bike from './p2bike_logo.png'
import logo from './logo.png'
import hero_img from './hero_img.png'
import dreambuild from "./dreambuild.jpg"
import bike from "./bike.jpg"
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,
    p2bike,
    hero_img,
    dreambuild,
    bike,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Cube Stereo 170 race",
        description: "A 29″ aluminum frame full suspension enduro bike with high-end components.",
        price: 3400,
        image: [mtb_1, mtb_1_1, mtb_1_2, mtb_1_3],
        category: "mtb",
        subCategory: "full-suspension",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaab",
        name: "Transition TransAm",
        description: "The classic TransAM returns! After a seven-year hiatus, the reliable trail-shredding hardtail is back in the lineup for a limited time. Now with modern geometry, dual 29-inch wheels, a capable build spec or frameset options, and two classic color schemes.",
        price: 2500,
        image: [mtb_2, mtb_2_1, mtb_2_2, mtb_2_3],
        category: "mtb",
        subCategory: "hardtail",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Giant Trance X",
        description: "Float through rock gardens, hit the jumps, and find the faster line. With quick-handling 27.5 wheels and adjustable frame geometry, this lively trail bike is a party on wheels.",
        price: 3200,
        image: [mtb_3, mtb_3_1, mtb_3_2, mtb_3_3],
        category: "mtb",
        subCategory: "full-suspension",
        sizes: ["M", "L", "XL"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaad",
        name: "Specialized Stumpjumper fsr evo comp",
        description: "In order to bring EVO fun to the masses, we took our FACT 11m carbon frame (yes, the same one as the S-Works), dressed it with a bullet-proof SRAM GX Eagle 12-speed drivetrain and a tough as nails set of alloy wheels, and set it loose to shred unsuspecting trails everywhere.",
        price: 3600,
        image: [mtb_4, mtb_4_1, mtb_4_3, mtb_4_4],
        category: "mtb",
        subCategory: "full-suspension",
        sizes: ["S1", "S2", "S3", "S4"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Liteville 4-ONE MK2",
        description: "A gravel bike that brings pure riding pleasure, reliable on and off the road.",
        price: 2000,
        image: [gravel_1, gravel_1_1, gravel_1_2],
        category: "gravel",
        subCategory: "dropbar",
        sizes: ["S", "M", "L", "XL"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Ragley Trig",
        description: "Known for its exquisite and hardy steel-framed mountain bikes, British-based company Ragley has turned its hand to the burgeoning gravel bike market and distilled its off-road knowledge into the drop-bar bike pictured here.",
        price: 1800,
        image: [gravel_2, gravel_2_1, gravel_2_2, gravel_2_3],
        category: "gravel",
        subCategory: "dropbar",
        sizes: ["M", "L", "XL"],
        date: 1716234545448,
        bestseller: false
    },
    {
        _id: "aaaag",
        name: "Salsa Warbird",
        description: "Warbird C GRX 600 1x is a carbon gravel bike designed to win races, but it’s built for much more than just speed.",
        price: 2300,
        image: [gravel_3, gravel_3_1],
        category: "gravel",
        subCategory: "dropbar",
        sizes: ["M", "L", "XL", "XXL"],
        date: 1716234545448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Rockshox Lyrik Ultimate",
        description: "The Lyrik RC2 was undoubtedly the fork that put RockShox back on the map in the enduro sector. The fork was an exceptional performer, very supple off the top while retaining a firm and supportive mid to end stroke.",
        price: 750,
        image: [fork_1, fork_1_1, fork_1_2],
        category: "suspension",
        subCategory: "fork",
        sizes: ["150mm", "160mm"],
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaai",
        name: "DVO Diamond",
        description: "We looked through the clutter of the trail category to find clarity in what really matters: performance and adjustability. The Diamond is our 140mm to 170mm do-it-all but cut-no-corners fork that caters to the aggressive rider that demands more.",
        price: 700,
        image: [fork_2, fork_2_1],
        category: "suspension",
        subCategory: "fork",
        sizes: ["160mm"],
        date: 1716234545448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Rockshox Superdeluxe Ultimate",
        description: "Performance to match the most demanding riders out there. The ground up, all-new Super Deluxe Coil Ultimate is a work of art with no feature spared. Equipped with an entirely new chassis.",
        price: 600,
        image: [shock_1, shock_1_1],
        category: "suspension",
        subCategory: "shock",
        sizes: ["185x47.5", "190x45", "205x60", " 210x50"],
        date: 1716234545448,
        bestseller: true
    },
]