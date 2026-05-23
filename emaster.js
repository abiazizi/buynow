fetch('https://api.ipinfo.io/lite/me?token=aae1300c15f1b2')
    .then(response => response.json())
    .then(data => {
        if( data.country_code == "ID" ){
            const now = Date.now();
            window.location.href = 'intent://ec/pdp?gd_label=click_wap_share_from_pdp_auto&need_mall=1&is_commerce=1&jump_type='+now+'&h5_start_ts='+now+'&needlaunchlog=1&page_name=product_detail&params_url=https%3A%2F%2Fshop-id.tokopedia.com%2Fview%2Fproduct%2F1731653871907014647%3F_svg%3D1%26chain_key%3D%257B%2522t%2522%253A1%252C%2522k%2522%253A%2522000000000000000007642622382475462418%2522%252C%2522sc%2522%253A%2522copy%2522%257D%26encode_params%3DMIIBUwQMbkT4brLdCDMfaT-tBIIBLxiip-D2L3ky7IhyC2hFPzlo9BiaGjiS-Q-JXFUbfWoNJHriHIH1YXr6NiX-cGEbSvus6m_QEYF9NdGFkHL4DWtgbjFzLnrkJiJU5hGT4ppIFOhuroNcvqVJLve6m1glU7fbIAEUCYtrFT5IShEYg7ZwxA5a4azwybIu3AYNmZj6sq_qkk4Aybv-jIjNyvT6XfZ2tnXl4HjjoAnLfefYBoJh3U0IIYjwZ3jmohm99OY_RldkN4hd0lDWXupA2Z1FxN5f9xICPXD0fF8XCZ-Tsgey1dtWuxzK7OSTBMNQAKVa1FpCRpoUelifGN6lenwRvlp9SNdpoyCbEsoc2ZWgpRdUxcps3NyvlvYzdtZq0y_iWDgq5wbN5aL1Tb8paxGxUH4wzd64mN3nppa48GHPsgQQamRawXTcTEPJxFwolzt8oQ%253D%253D%26og_info%3D%257B%2522image%2522%253A%2522https%253A%252F%252Fp16-oec-sg.ibyteimg.com%252Ftos-alisg-i-aphluv4xwc-sg%252F87a2a3355a6e4a97b78ecf0f481d6c76~tplv-aphluv4xwc-resize-jpeg%253A800%253A800.jpeg%253Fdr%253D15584%2526t%253D555f072d%2526ps%253D933b5bde%2526shp%253D2408c917%2526shcp%253D32ce9e9e%2526idc%253Dmy%2526from%253D604555543%2522%252C%2522title%2522%253A%2522Popsicles%252BLongsleeve%252BBoxy%252BLengan%252BPanjang%252BDinosaursHitam%252B-%252BBoxy%252BCrop%252BLongsleeve%252BKaos%252BOversize%252BPrinting%252BTee%2522%257D%26scene%3Dpdp%26share_app_id%3D1180%26share_region%3DID%26timestamp%3D1779436702%26trackParams%3D%257B%2522enter_from_info%2522%253A%2522product_share_outside%2522%252C%2522source_page_type%2522%253A%2522product_share%2522%252C%2522enable_shop_tab_popup%2522%253A1%257D%26use_land_page%3D1%26utm_campaign%3Dclient_share%26utm_source%3Dcopy&refer=web&requestParams=%7B%22product_id%22%3A%5B%221731653871907014647%22%5D%7D&trackParams=%7B%22enter_from_info%22%3A%22product_share_outside%22%2C%22source_page_type%22%3A%22product_share%22%2C%22enable_shop_tab_popup%22%3A1%7D';
            console.log(data.country_code);
        }
    })
    .catch(error => {
        console.error(error);
    });
