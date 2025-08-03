import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header-wrapper pb-container">
      <div className="logo-container">
        <img
          src="https://www.designmantic.com/logo-images/172864.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "964722",
          name: "Bikkgane Biryani",
          city: "7",
          slugs: {
            restaurant: "bikkgane-biryani-harrison-road-burrabazar",
            city: "kolkata",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/d8741bd0-36be-48e7-9c94-1995fcc2729c_964722.jpg",
          address:
            "Shop No. 107, FF 77/1, Harrison Road, Mahatma Gandhi Road , Ward No.: 37, Borough No.: 5, KOLKATA MUNICIPAL CORPORATION, Kolkata, West Bengal-700007",
          locality: "Harrison Road",
          areaName: "MG Road, Kolkata",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Biryani", "Mughlai"],
          avgRating: 4.5,
          feeDetails: {},
          parentId: "5070",
          avgRatingString: "4.5",
          totalRatingsString: "1.3K+",
          promoted: true,
          adTrackingId:
            "cid=31636281~p=0~adgrpid=31636281#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=964722~plpr=SEARCH#RESTAURANT~st=kolkata, west bengal~eid=9afa585b-5e4b-4cf6-8a6b-5ba823c49baf~srvts=1754225492160",
          sla: {
            deliveryTime: 29,
            minDeliveryTime: 25,
            maxDeliveryTime: 30,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "25-30 MINS",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹55",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "31636281",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal","adTrackingId":"cid=31636281~p=0~adgrpid=31636281#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=964722~plpr=SEARCH#RESTAURANT~st=kolkata, west bengal~eid=9afa585b-5e4b-4cf6-8a6b-5ba823c49baf~srvts=1754225492160"}',
          objectValue: "964722",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
            restaurant_id: "964722",
            query: "Kolkata, West Bengal",
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "368032",
          name: "Chowman",
          city: "7",
          slugs: {
            restaurant: "chowman-burrabazar-burrabazar",
            city: "kolkata",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/49b82731-b099-4365-83db-6a2b8488c685_368032.jpg",
          address:
            "118, Ground Floor, Raja Dinendra Street.Kolkata Kolkata, West Bengal 700004",
          locality: "Maniktala",
          areaName: "Dumdum",
          costForTwo: "70000",
          costForTwoMessage: "₹700 FOR TWO",
          cuisines: [
            "Chinese",
            "Asian",
            "Thai",
            "Oriental",
            "Burmese",
            "Tibetan",
          ],
          avgRating: 4.6,
          feeDetails: {},
          parentId: "266",
          avgRatingString: "4.6",
          totalRatingsString: "22K+",
          sla: {
            deliveryTime: 54,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 3.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "3.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Chinese.png",
                description: "Delivery!",
              },
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹111",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "1.5K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal"}',
          objectValue: "368032",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
            restaurant_id: "368032",
            query: "Kolkata, West Bengal",
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "56983",
          name: "Cafe Blue Mug",
          city: "7",
          slugs: {
            restaurant: "cafe-blue-mug-jodhpur-park-south-kolkata",
            city: "kolkata",
          },
          cloudinaryImageId: "gy7y9mkq0sl4ww070npw",
          address:
            "1/243A, GARIAHAT ROAD, KOLKATA - 700068 , KOLKATA MUNICIPAL CORPORATION, Kolkata, West Bengal-700068",
          locality: "Jodhpur Park",
          areaName: "South Kolkata",
          costForTwo: "70000",
          costForTwoMessage: "₹700 FOR TWO",
          cuisines: ["Continental", "Italian", "Beverages"],
          avgRating: 4.6,
          feeDetails: {},
          parentId: "52501",
          avgRatingString: "4.6",
          totalRatingsString: "8.6K+",
          promoted: true,
          adTrackingId:
            "cid=31583042~p=1~adgrpid=31583042#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=56983~plpr=SEARCH#RESTAURANT~st=kolkata, west bengal~eid=48369939-8a2a-453c-966a-956f13714b6c~srvts=1754225492160",
          sla: {
            deliveryTime: 66,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 7.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "65-70 MINS",
            lastMileTravelString: "7.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            header: "Get every item @ 59",
            shortDescriptionList: [
              {
                meta: "Get every item @ 59",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
              {
                meta: "Get every item @ 69",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "Get every item @ 59",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
              {
                meta: "Get every item @ 69",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
            ],
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            descriptionList: [
              {
                meta: "Get every item @ 59",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
              {
                meta: "Get every item @ 69",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
            ],
            headerType: "HEADER_TYPE_1",
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "7.9K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "31583042",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal","adTrackingId":"cid=31583042~p=1~adgrpid=31583042#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=56983~plpr=SEARCH#RESTAURANT~st=kolkata, west bengal~eid=48369939-8a2a-453c-966a-956f13714b6c~srvts=1754225492160"}',
          objectValue: "56983",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
            restaurant_id: "56983",
            query: "Kolkata, West Bengal",
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "893947",
          name: "Oudh 1590",
          city: "7",
          slugs: {
            restaurant: "oudh-1590-central-kolkata-central-kolkata",
            city: "kolkata",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/fb76d27d-cdd7-4c27-b3e0-7298e9095e4a_893947.jpg",
          address: "Shop No : A/2C , Floor : na , MD. ISHAQUE ROAD , ",
          locality: "Md Ishaque Road",
          areaName: "Central Kolkata",
          costForTwo: "80000",
          costForTwoMessage: "₹800 FOR TWO",
          cuisines: ["Biryani"],
          avgRating: 4.5,
          feeDetails: {},
          parentId: "686",
          avgRatingString: "4.5",
          totalRatingsString: "3.6K+",
          sla: {
            deliveryTime: 37,
            minDeliveryTime: 35,
            maxDeliveryTime: 40,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "35-40 MINS",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                description: "Delivery!",
              },
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹89",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal"}',
          objectValue: "893947",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
            restaurant_id: "893947",
            query: "Kolkata, West Bengal",
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "339565",
          name: "Biryani By Kilo",
          city: "7",
          slugs: {
            restaurant: "biryani-by-kilo-south-kolkata-south-kolkata",
            city: "kolkata",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/cc4519df-4cd2-43cb-9b71-28f478981480_339565.JPG",
          address:
            "Ground Floor, 23/13, Gariaht Road, Near Kotak Mahindra Bank, Kolkata",
          locality: "South Kolkata",
          areaName: "Dhakuria",
          costForTwo: "60000",
          costForTwoMessage: "₹600 FOR TWO",
          cuisines: [
            "Biryani",
            "Hyderabadi",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Desserts",
          ],
          avgRating: 4.3,
          feeDetails: {},
          parentId: "130",
          avgRatingString: "4.3",
          totalRatingsString: "9.9K+",
          promoted: true,
          adTrackingId:
            "cid=31705744~p=2~adgrpid=31705744#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=339565~plpr=SEARCH#RESTAURANT~st=kolkata, west bengal~eid=dde19984-a799-462a-aa80-2fa10ae1d584~srvts=1754225492160",
          sla: {
            deliveryTime: 50,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 6.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "6.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            header: "Get items under 89",
            shortDescriptionList: [
              {
                meta: "99 store",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
              {
                meta: "Get items under 112",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "99 store",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
              {
                meta: "Get items under 112",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
            ],
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            descriptionList: [
              {
                meta: "99 store",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
              {
                meta: "Get items under 112",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
            ],
            headerType: "HEADER_TYPE_1",
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "31705744",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal","adTrackingId":"cid=31705744~p=2~adgrpid=31705744#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=339565~plpr=SEARCH#RESTAURANT~st=kolkata, west bengal~eid=dde19984-a799-462a-aa80-2fa10ae1d584~srvts=1754225492160"}',
          objectValue: "339565",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
            restaurant_id: "339565",
            query: "Kolkata, West Bengal",
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "762090",
          name: "Rang De Basanti Dhaba",
          city: "7",
          slugs: {
            restaurant: "rang-de-basanti-dhaba-central-kolkata-central-kolkata",
            city: "kolkata",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/b9d6e62f-b2bc-4c95-b96b-67fcd5d638f8_762090.jpg",
          address:
            " Premises No. 20A, Nellie Sengupta Sarani, New Market Area, Dharmatala, Taltala, Kolkata, West Bengal 700046",
          locality: "New Market",
          areaName: "Central Kolkata",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["North Indian", "Kebabs"],
          avgRating: 4.4,
          feeDetails: {},
          parentId: "758",
          avgRatingString: "4.4",
          totalRatingsString: "3.0K+",
          sla: {
            deliveryTime: 43,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 2.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "40-45 MINS",
            lastMileTravelString: "2.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                description: "Delivery!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "415",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal"}',
          objectValue: "762090",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "762090",
            query: "Kolkata, West Bengal",
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "301010",
          name: "Kolkata@99",
          city: "7",
          slugs: {
            restaurant: "kolkata@99-salt-lake-salt-lake",
            city: "kolkata",
          },
          cloudinaryImageId: "ptx2rjik3s57qhc6wz9o",
          address: "Govinda Bhavan,2Nd Floor, Near Iam",
          locality: "Salt Lake",
          areaName: "Salt Lake",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["Bengali", "Biryani", "Chinese", "Thalis"],
          avgRating: 4,
          feeDetails: {},
          parentId: "120048",
          avgRatingString: "4.0",
          totalRatingsString: "48K+",
          promoted: true,
          adTrackingId:
            "cid=31583136~p=4~adgrpid=31583136#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=301010~plpr=SEARCH#RESTAURANT~st=kolkata, west bengal~eid=2afb8728-2d9d-4a42-9c46-71fbf5c82591~srvts=1754225492160",
          sla: {
            deliveryTime: 65,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 9.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "60-65 MINS",
            lastMileTravelString: "9.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            header: "Get every item @ 44",
            shortDescriptionList: [
              {
                meta: "Get every item @ 44",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
              {
                meta: "99 store",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "Get every item @ 44",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
              {
                meta: "99 store",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
            ],
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            descriptionList: [
              {
                meta: "Get every item @ 44",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
              {
                meta: "99 store",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
            ],
            headerType: "HEADER_TYPE_1",
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "263",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "31583136",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal","adTrackingId":"cid=31583136~p=4~adgrpid=31583136#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=301010~plpr=SEARCH#RESTAURANT~st=kolkata, west bengal~eid=2afb8728-2d9d-4a42-9c46-71fbf5c82591~srvts=1754225492160"}',
          objectValue: "301010",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
            restaurant_id: "301010",
            query: "Kolkata, West Bengal",
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "101421",
          name: "MUGHAL BIRYANI",
          city: "7",
          slugs: {
            restaurant: "mughal-arsalan-biryani-mg-road-burrabazar",
            city: "kolkata",
          },
          cloudinaryImageId: "dqryaxhlba4okzyzcx5z",
          address: "112 B Mahatma Gandhi Road",
          locality: "College Street",
          areaName: "College Street",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Indian", "Biryani"],
          avgRating: 4.1,
          feeDetails: {},
          parentId: "140904",
          avgRatingString: "4.1",
          totalRatingsString: "30K+",
          sla: {
            deliveryTime: 25,
            minDeliveryTime: 20,
            maxDeliveryTime: 25,
            lastMileTravel: 2.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "20-25 MINS",
            lastMileTravelString: "2.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "279",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal"}',
          objectValue: "101421",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
            restaurant_id: "101421",
            query: "Kolkata, West Bengal",
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "625669",
          name: "Madly Momos",
          city: "7",
          slugs: {
            restaurant: "madly-momos-jadavpur-jadavpur",
            city: "kolkata",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/88694922-53ca-4ad8-a7dd-e095f3174057_625669 (1).jpg",
          address:
            "25/22, PRINCE GOLAM MD. SHAH ROAD, BOROUGH-X, KOLKATA MUNICIPAL CORPORATION, Kolkata, West Bengal - 700095",
          locality: "MD. Shah Road",
          areaName: "Jadavpur",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Tibetan", "Chinese", "Fast Food", "Street Food"],
          avgRating: 4.3,
          feeDetails: {},
          parentId: "372083",
          avgRatingString: "4.3",
          totalRatingsString: "3.8K+",
          promoted: true,
          adTrackingId:
            "cid=31583062~p=5~adgrpid=31583062#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=625669~plpr=SEARCH#RESTAURANT~st=kolkata, west bengal~eid=03738e4d-4d8d-4f6f-a7be-73daf2b17283~srvts=1754225492160",
          sla: {
            deliveryTime: 58,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 9.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "9.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            header: "Get every item @ 89",
            shortDescriptionList: [
              {
                meta: "Get every item @ 89",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
              {
                meta: "99 store",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "Get every item @ 89",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
              {
                meta: "99 store",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
            ],
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV2: {
            descriptionList: [
              {
                meta: "Get every item @ 89",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
              {
                meta: "99 store",
                discountType: "FinalPrice",
                operationType: "RESTAURANT",
              },
            ],
            headerType: "HEADER_TYPE_1",
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "31583062",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal","adTrackingId":"cid=31583062~p=5~adgrpid=31583062#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=625669~plpr=SEARCH#RESTAURANT~st=kolkata, west bengal~eid=03738e4d-4d8d-4f6f-a7be-73daf2b17283~srvts=1754225492160"}',
          objectValue: "625669",
          impressionObjectName: "impression-restaurant-sld-ad",
          clickObjectName: "click-restaurant-sld-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
            restaurant_id: "625669",
            query: "Kolkata, West Bengal",
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
            source: "SEARCH",
            isSld: "true",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "258968",
          name: "Machhli Baba Fries",
          city: "7",
          slugs: {
            restaurant:
              "calcutta-cravings-by-machhli-baba-fries-burrabazar-burrabazar",
            city: "kolkata",
          },
          cloudinaryImageId: "pqqqckhvkmfazk9iahv0",
          address: "71, Bentick Street , 1st Foor , Faraday house , Kolkata -1",
          locality: "Bentick Street",
          areaName: "Central Kolkata",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "Bengali",
            "Street Food",
            "Rolls & Wraps",
            "Kebabs",
            "Fast Food",
          ],
          avgRating: 4.4,
          feeDetails: {},
          parentId: "4413",
          avgRatingString: "4.4",
          totalRatingsString: "3.1K+",
          sla: {
            deliveryTime: 37,
            minDeliveryTime: 35,
            maxDeliveryTime: 40,
            lastMileTravel: 2.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "35-40 MINS",
            lastMileTravelString: "2.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal"}',
          objectValue: "258968",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
            restaurant_id: "258968",
            query: "Kolkata, West Bengal",
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1137011",
          name: "Fry-O-Bengali",
          city: "7",
          slugs: {
            restaurant: "fry-o-bengali-south-kolkata-south-kolkata",
            city: "kolkata",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/9/78352460-80a2-4534-9e0d-2e482bdaa711_1137011.jpg",
          address:
            "FLAT 3E - THIRD FLOOR, SRI BALAJI AVAYA, NAIPUKUR PALPARA, RECKJUANI MORE ,RAJARHAT BISHNUPUR-I,RAJARHAT,North Twenty Four Parganas,West Bengal-700135\t",
          locality: "South Kolkata",
          areaName: "South Kolkata",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Chinese", "Chaat", "Fast Food"],
          feeDetails: {},
          parentId: "654660",
          avgRatingString: "NEW",
          promoted: true,
          adTrackingId:
            "cid=31432685~p=7~adgrpid=31432685#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1137011~plpr=SEARCH#RESTAURANT~st=kolkata, west bengal~eid=f2b7b436-a028-4693-a7d7-d399fd3a59ef~srvts=1754225492160",
          sla: {
            deliveryTime: 49,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 5.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "45-50 MINS",
            lastMileTravelString: "5.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "31432685",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal","adTrackingId":"cid=31432685~p=7~adgrpid=31432685#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1137011~plpr=SEARCH#RESTAURANT~st=kolkata, west bengal~eid=f2b7b436-a028-4693-a7d7-d399fd3a59ef~srvts=1754225492160"}',
          objectValue: "1137011",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
            restaurant_id: "1137011",
            query: "Kolkata, West Bengal",
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "837735",
          name: "Shanghai Flavours of China Town",
          city: "7",
          slugs: {
            restaurant:
              "shanghai-the-flavours-of-china-town-burrabazar-burrabazar",
            city: "kolkata",
          },
          cloudinaryImageId: "7170641b5ee8b9cf94597ae555d762eb",
          address: "158/1, Bidhan Sarani, P.S.- Burtolla, Kolkata -700006",
          locality: "Dumdum",
          areaName: "Hatibagan",
          costForTwo: "60000",
          costForTwoMessage: "₹600 FOR TWO",
          cuisines: [
            "Chinese",
            "Asian",
            "Oriental",
            "Pan-Asian",
            "Thai",
            "Seafood",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.3,
          feeDetails: {},
          parentId: "181666",
          avgRatingString: "4.3",
          totalRatingsString: "4.0K+",
          sla: {
            deliveryTime: 43,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 3.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "40-45 MINS",
            lastMileTravelString: "3.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Chinese.png",
                description: "Delivery!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.8",
              ratingCount: "1.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal"}',
          objectValue: "837735",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
            restaurant_id: "837735",
            query: "Kolkata, West Bengal",
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "25144",
          name: "Haldiram Food City",
          city: "7",
          slugs: {
            restaurant: "haldiram-food-city-ballygunge-central-kolkata",
            city: "kolkata",
          },
          cloudinaryImageId: "liv3ujxngeoj5hv1sflz",
          address: "Ground  Floor, 24, Ballygunge Park, Ballygunge, Kolkata",
          areaName: "South Kolkata",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Sweets", "Desserts", "Snacks", "Bakery", "Beverages"],
          avgRating: 4.5,
          feeDetails: {},
          parentId: "4013",
          avgRatingString: "4.5",
          totalRatingsString: "11K+",
          sla: {
            deliveryTime: 53,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 4.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "4.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "Ratnesh_Badges/Rx_Awards_2025/Poori.png",
                description: "Delivery!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal"}',
          objectValue: "25144",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
            restaurant_id: "25144",
            query: "Kolkata, West Bengal",
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "441677",
          name: "KARIM'S- Original from Jama Masjid Delhi- 6",
          city: "7",
          slugs: {
            restaurant: "karim’s-burrabazar-burrabazar",
            city: "kolkata",
          },
          cloudinaryImageId: "simyy9lwwsgfgtaabun2",
          address:
            "84, Sri Aurobindo Sarani, Ward No - 17, Kolkata, West Bengal 700005",
          locality: "Hati Bagan",
          areaName: "Hati Bagan",
          costForTwo: "60000",
          costForTwoMessage: "₹600 FOR TWO",
          cuisines: [
            "Mughlai",
            "Biryani",
            "Tandoor",
            "North Indian",
            "Kebabs",
            "rolls",
            "shawarma",
          ],
          avgRating: 4.5,
          feeDetails: {},
          parentId: "284854",
          avgRatingString: "4.5",
          totalRatingsString: "3.8K+",
          sla: {
            deliveryTime: 46,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 4.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "45-50 MINS",
            lastMileTravelString: "4.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹49",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "3.0K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal"}',
          objectValue: "441677",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
            restaurant_id: "441677",
            query: "Kolkata, West Bengal",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "650440",
          name: "Kolkata Haji Biryani",
          city: "7",
          slugs: {
            restaurant: "kolkata-haji-biryani-lake-town-lake-town",
            city: "kolkata",
          },
          cloudinaryImageId: "fdbe0349e748596a430a48e72edbe4fb",
          address:
            "AC-372 KRISHNAPUR, BAROWARITALA, KOLKATA, WARD NO-26, BIDHANNAGARRAJARHAT MUNICIPAL CORPORATION, North Twenty Four Parganas, West Bengal - 700102",
          locality: "Kestopur",
          areaName: "Lake Town",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["Biryani", "North Indian"],
          avgRating: 4,
          feeDetails: {},
          parentId: "119964",
          avgRatingString: "4.0",
          totalRatingsString: "805",
          sla: {
            deliveryTime: 55,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "9.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            header: "FLAT50 off",
            shortDescriptionList: [
              {
                meta: "FLAT50 off | Use FLATDEAL",
                discountType: "Flat",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "FLAT50 off | Use FLATDEAL",
                discountType: "Flat",
                operationType: "RESTAURANT",
              },
            ],
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            header: "₹50 off",
            shortDescriptionList: [
              {
                meta: "₹50 off",
                discountType: "Flat",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "FLAT50 off | Use FLATDEAL",
                discountType: "Flat",
                operationType: "RESTAURANT",
              },
            ],
            subHeader: "FLAT DEAL",
            headerType: "HEADER_TYPE_2",
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"7fedbb36-8d57-c5be-11fd-6714a154258b","grid":"702f6955-05a0-421f-9057-34270e38ef7c","queryUniqueId":"791c7764-1e8d-81bd-507d-d57b12826df7","query":"Kolkata, West Bengal"}',
          objectValue: "650440",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "650440",
            query: "Kolkata, West Bengal",
            sourceSessionId: "m35f1ae7-e2de-4557-a83b-c7057acf08ad",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "688f5b53f9d6b4ea985b99a715f3c898",
            qrEnabled: "false",
          },
        },
      },
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.card?.card?.info;

  return (
    <div className="res-card">
      <div className="img-div">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dlvdpacy07g2c48vugwf"
          alt="image"
          className="restaurant-logo"
        />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <p>{avgRating}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="pb-container">
        <div className="search-bar"></div>
        <div className="res-container">
          {resObj.map((restaurant) => (
            <RestaurantCard
              key={restaurant.card.card.info.id}
              resData={restaurant}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
