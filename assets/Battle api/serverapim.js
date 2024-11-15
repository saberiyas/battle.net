let apiBattel3 = async () => {
    let req = await fetch("https://saberiyas.github.io/battel-server/mostgifted.json");
    let data = await req.json();
    
    // تعداد کارت‌ها را بررسی کنید
    let cards = data.map((elem) => {
        return `
        <div class="desktop:w-[270px] desktop:h-[414px] mobile:w-fit mobile:h-auto desktop:flex-nowrap bg-[#23252B] rounded-md">
            <img src="${elem.image}" alt="${elem.category}" class="rounded-t-md desktop:object-cover desktop:w-full desktop:h-[148px] mobile:w-[389px] mobile:h-[215px]">
            <div class="pt-[24px] px-[24px] ">
                <img src="${elem.svg}" alt="" class="w-[28px] h-[24px] inline-block">
                <span class="inline-block text-[12px] text-[#ffffffb8] mt-2 font-bold">${elem.category}</span>
                <strong class="block text-[15px] text-[#ffffffd6]">${elem.title}</strong>
                <p class="text-[#ffb400] text-[14px]">${elem.text}</p>
                <span class="text-[12px] text-[#ffffffb8]">${elem.sub}</span>
                <span class="block mt-6 font-bold text-[16px] text-[#ffffffd6]">${elem.bottem}</span>
            </div>
        </div>
        `;
    });


    document.querySelector("#container4").insertAdjacentHTML("afterbegin", cards.join(""));
};

apiBattel3();
