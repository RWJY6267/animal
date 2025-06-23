// 寵物資料庫
const pets = {
    dogs: [
        {
            name: '拉布拉多',
            traits: {
                personality: ['active', 'friendly', 'playful', 'social', 'intelligent'],
                lifestyle: ['outdoor', 'athletic', 'family', 'social'],
                space: ['house', 'large', 'garden', 'compound'],
                careTime: ['adequate', 'extensive']
            },
            image: 'https://images.pexels.com/photos/1118785/pexels-photo-1118785.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '充滿活力、友善的家庭犬，適合有大空間的家庭。',
            careGuide: {
                feeding: '每天2-3餐，體重30kg的成犬每天約需要360-480g的飼料',
                exercise: '每天需要至少1小時的運動，包括散步和遊戲',
                grooming: '每週刷毛2-3次，定期清潔耳朵和剪指甲',
                health: '定期體檢和疫苗注射，注意關節健康',
                training: '容易訓練，建議從小開始基礎服從訓練'
            }
        },
        {
            name: '柴犬',
            traits: {
                personality: ['independent', 'protective', 'intelligent', 'curious'],
                lifestyle: ['indoor', 'relaxed', 'wfh', 'family'],
                space: ['apartment', 'small', 'balcony', 'city'],
                careTime: ['moderate', 'adequate']
            },
            image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '忠誠獨立，適應力強，適合公寓生活。',
            careGuide: {
                feeding: '每天2餐，體重10kg的成犬每天約需要200-250g的飼料',
                exercise: '每天需要30-60分鐘的運動量',
                grooming: '每週刷毛1-2次，換季時期需要更頻繁的梳理',
                health: '定期體檢、疫苗注射，注意皮膚健康',
                training: '需要耐心訓練，個性較固執'
            }
        },
        {
            name: '吉娃娃',
            traits: {
                personality: ['playful', 'social', 'protective'],
                lifestyle: ['indoor', 'wfh', 'family', 'night'],
                space: ['apartment', 'small', 'studio', 'city'],
                careTime: ['minimal', 'moderate']
            },
            image: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '體型小巧、活潑可愛，適合居住在公寓的寵物犬，非常適合陪伴型的生活方式。',
            careGuide: {
                feeding: '每天2-3餐，體重3kg的成犬每天約需要90-120g的飼料',
                exercise: '每天需要20-30分鐘的運動量',
                grooming: '每週刷毛1次，定期檢查耳朵和牙齒',
                health: '定期體檢和疫苗注射，注意保暖',
                training: '聰明且好學，但可能因體型小而訓練不易'
            }
        },
        {
            name: '金毛尋回犬',
            traits: {
                personality: ['friendly', 'gentle', 'intelligent', 'social'],
                lifestyle: ['outdoor', 'family', 'athletic', 'social'],
                space: ['house', 'large', 'garden', 'rural'],
                careTime: ['adequate', 'extensive']
            },
            image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '智商高、親人友善，最適合有孩子的家庭，需要較大的活動空間。',
            careGuide: {
                feeding: '每天2-3餐，體重30kg的成犬每天約需要360-480g的飼料',
                exercise: '每天需要1小時以上的運動，喜歡游泳',
                grooming: '每週刷毛2-3次，定期清潔耳朵和剪指甲',
                health: '定期體檢和疫苗注射，注意心臟和關節健康',
                training: '聰明且樂於學習，適合各種訓練'
            }
        },
        {
            name: '臘腸狗',
            traits: {
                personality: ['curious', 'playful', 'protective'],
                lifestyle: ['indoor', 'relaxed', 'wfh', 'family'],
                space: ['apartment', 'small', 'balcony', 'city'],
                careTime: ['minimal', 'moderate']
            },
            image: 'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '體型小巧但性格獨立，適應力強，適合公寓生活，不需要太大的活動空間。',
            careGuide: {
                feeding: '每天2餐，體重9kg的成犬每天約需要200-250g的飼料',
                exercise: '每天需要30分鐘的運動量',
                grooming: '每週刷毛1-2次，定期檢查耳朵和牙齒',
                health: '定期體檢和疫苗注射，注意脊椎健康',
                training: '聰明但有時候固執，需要耐心訓練'
            }
        },
        {
            name: '哈士奇',
            traits: {
                personality: ['active', 'curious', 'playful', 'social'],
                lifestyle: ['outdoor', 'athletic', 'travel', 'busy'],
                space: ['house', 'large', 'garden', 'rural'],
                careTime: ['extensive']
            },
            image: 'https://images.pexels.com/photos/3715587/pexels-photo-3715587.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '精力充沛、活潑好動，需要大量運動，適合有大院子的家庭。',
            careGuide: {
                feeding: '每天2餐，體重25kg的成犬每天約需要300-450g的飼料',
                exercise: '每天需要2小時以上的運動，喜歡奔跑和玩耍',
                grooming: '每週刷毛1-2次，換季時期需要更頻繁的梳理',
                health: '定期體檢和疫苗注射，注意關節和皮膚健康',
                training: '聰明但有時候獨立性強，需要耐心和時間訓練'
            }
        },
        {
            name: '邊境牧羊犬',
            traits: {
                personality: ['intelligent', 'active', 'social', 'protective'],
                lifestyle: ['outdoor', 'athletic', 'family', 'social'],
                space: ['house', 'large', 'garden', 'rural'],
                careTime: ['extensive']
            },
            image: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '世界上最聰明的狗狗之一，非常適合喜歡運動和訓練的飼主，需要大量運動和心智刺激。',
            careGuide: {
                feeding: '每天2-3餐，體重20kg的成犬每天約需要300-400g的飼料',
                exercise: '每天需要2-3小時的高強度運動和訓練',
                grooming: '每週梳理2-3次，特別是在換毛期間',
                health: '定期體檢和疫苗注射，注意髖關節和眼睛健康',
                training: '極易訓練，需要大量的心智刺激活動'
            }
        },
        {
            name: '貴賓狗',
            traits: {
                personality: ['intelligent', 'social', 'playful', 'active'],
                lifestyle: ['indoor', 'family', 'social', 'wfh'],
                space: ['apartment', 'small', 'city', 'studio'],
                careTime: ['moderate', 'adequate']
            },
            image: 'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '優雅聰明，不會掉毛，適合過敏體質的家庭，可以適應公寓生活。',
            careGuide: {
                feeding: '每天2-3餐，根據體型大小調整份量',
                exercise: '每天需要30-60分鐘的運動',
                grooming: '需要定期專業美容，6-8週修剪一次',
                health: '定期檢查牙齒和眼睛，注意膝蓋問題',
                training: '聰明易教，適合各種訓練項目'
            }
        },
        {
            name: '柯基犬',
            traits: {
                personality: ['friendly', 'playful', 'intelligent', 'social'],
                lifestyle: ['indoor', 'family', 'relaxed', 'wfh'],
                space: ['apartment', 'house', 'city', 'balcony'],
                careTime: ['moderate', 'adequate']
            },
            image: 'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '活潑可愛，適合家庭飼養，雖然體型小但精力充沛。',
            careGuide: {
                feeding: '每天2餐，體重12kg的成犬每天約需要240-280g的飼料',
                exercise: '每天需要45-60分鐘的運動',
                grooming: '每週刷毛2-3次，定期清理耳朵',
                health: '注意體重控制，預防背部問題',
                training: '聰明但有時固執，需要耐心訓練'
            }
        }
    ],
    cats: [
        {
            name: '英國短毛貓',
            traits: {
                personality: ['calm', 'gentle', 'independent'],
                lifestyle: ['indoor', 'relaxed', 'wfh', 'night'],
                space: ['apartment', 'small', 'studio', 'city'],
                careTime: ['minimal', 'moderate']
            },
            image: 'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '性格溫和，適合室內生活的理想寵物。',
            careGuide: {
                feeding: '每天2-3餐，成貓每天約需要60-80g的飼料',
                exercise: '室內遊戲和互動玩具',
                grooming: '每週梳理1-2次，定期清潔耳朵',
                health: '定期體檢和疫苗注射，控制體重',
                training: '適度訓練使用貓砂盆和抓板'
            }
        },
        {
            name: '緬因貓',
            traits: {
                personality: ['active', 'intelligent', 'social'],
                lifestyle: ['indoor', 'busy', 'family', 'social'],
                space: ['house', 'large', 'compound', 'balcony'],
                careTime: ['moderate', 'adequate']
            },
            image: 'https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '大型貓咪，活潑好動，需要較大活動空間。',
            careGuide: {
                feeding: '每天2-3餐，成貓每天約需要80-100g的飼料',
                exercise: '需要足夠的空間活動，喜歡攀爬和探索',
                grooming: '每週梳理2-3次，特別是長毛區域',
                health: '定期體檢和疫苗注射，注意心臟和關節健康',
                training: '聰明且好奇，適合進行各種訓練和遊戲'
            }
        },
        {
            name: '波斯貓',
            traits: {
                personality: ['calm', 'gentle', 'independent'],
                lifestyle: ['indoor', 'relaxed', 'wfh', 'night'],
                space: ['apartment', 'small', 'studio', 'city'],
                careTime: ['moderate', 'adequate']
            },
            image: 'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '性格優雅、安靜，適合室內生活，需要定期梳理毛髮。',
            careGuide: {
                feeding: '每天2餐，成貓每天約需要60-80g的飼料',
                exercise: '適度的室內活動和遊戲',
                grooming: '每天梳理1次，特別注意眼淚痕和耳朵清潔',
                health: '定期體檢和疫苗注射，注意呼吸系統健康',
                training: '性格溫和，訓練時需要輕柔的方式'
            }
        },
        {
            name: '暹羅貓',
            traits: {
                personality: ['active', 'intelligent', 'social', 'curious'],
                lifestyle: ['indoor', 'busy', 'social', 'night'],
                space: ['apartment', 'small', 'balcony', 'city'],
                careTime: ['moderate']
            },
            image: 'https://images.pexels.com/photos/991831/pexels-photo-991831.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '聰明好動、喜歡與人互動，適應力強，叫聲特別。',
            careGuide: {
                feeding: '每天2-3餐，成貓每天約需要60-80g的飼料',
                exercise: '需要足夠的遊戲時間和互動',
                grooming: '每週梳理1-2次，定期清潔耳朵和牙齒',
                health: '定期體檢和疫苗注射，注意牙齒和皮膚健康',
                training: '聰明且好學，適合進行各種訓練'
            }
        },
        {
            name: '蘇格蘭摺耳貓',
            traits: {
                personality: ['calm', 'gentle', 'friendly'],
                lifestyle: ['indoor', 'relaxed', 'family', 'wfh'],
                space: ['apartment', 'small', 'studio', 'city'],
                careTime: ['minimal', 'moderate']
            },
            image: 'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '性格溫順、親人，適合室內生活，獨特的耳朵形狀非常可愛。',
            careGuide: {
                feeding: '每天2-3餐，成貓每天約需要60-80g的飼料',
                exercise: '適度的室內活動和遊戲',
                grooming: '每週梳理1-2次，特別注意耳朵和眼睛周圍的清潔',
                health: '定期體檢和疫苗注射，注意關節和骨骼健康',
                training: '性格溫和，訓練時需要輕柔的方式'
            }
        },
        {
            name: '美國短毛貓',
            traits: {
                personality: ['friendly', 'independent', 'gentle'],
                lifestyle: ['indoor', 'busy', 'wfh', 'night'],
                space: ['apartment', 'small', 'balcony', 'city'],
                careTime: ['minimal', 'moderate']
            },
            image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '容易相處、適應力強，適合初次養貓的家庭，不太需要特別的照顧。',
            careGuide: {
                feeding: '每天2餐，成貓每天約需要60-80g的飼料',
                exercise: '適度的室內活動和遊戲',
                grooming: '每週梳理1次，定期清潔耳朵和牙齒',
                health: '定期體檢和疫苗注射，注意體重和牙齒健康',
                training: '適度訓練使用貓砂盆和抓板，性格友善易於訓練'
            }
        },
        {
            name: '布偶貓',
            traits: {
                personality: ['gentle', 'social', 'friendly', 'calm'],
                lifestyle: ['indoor', 'family', 'relaxed', 'wfh'],
                space: ['apartment', 'house', 'city', 'balcony'],
                careTime: ['moderate', 'adequate']
            },
            image: 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '性格溫順似狗般親人，適合家庭飼養，需要主人的陪伴。',
            careGuide: {
                feeding: '每天2-3餐，成貓每天約需要80-100g的飼料',
                exercise: '需要適度玩耍和互動',
                grooming: '長毛需要每天梳理，定期清潔眼睛',
                health: '注意心臟和腎臟健康，定期體檢',
                training: '容易訓練，喜歡學習簡單技巧'
            }
        },
        {
            name: '孟加拉豹貓',
            traits: {
                personality: ['active', 'intelligent', 'curious', 'playful'],
                lifestyle: ['indoor', 'outdoor', 'athletic', 'social'],
                space: ['house', 'large', 'garden', 'compound'],
                careTime: ['adequate', 'extensive']
            },
            image: 'https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '外表豹紋華麗，個性活潑好動，需要大量運動和遊戲。',
            careGuide: {
                feeding: '每天2-3餐，注意肉類蛋白質的攝入',
                exercise: '需要豐富的遊戲環境和運動機會',
                grooming: '每週刷毛1-2次，皮毛容易護理',
                health: '注意心臟健康，定期驅蟲',
                training: '聰明好學，可以學習多種技巧'
            }
        },
        {
            name: '挪威森林貓',
            traits: {
                personality: ['gentle', 'independent', 'social', 'intelligent'],
                lifestyle: ['indoor', 'outdoor', 'family', 'relaxed'],
                space: ['house', 'large', 'garden', 'rural'],
                careTime: ['moderate', 'adequate']
            },
            image: 'https://images.pexels.com/photos/1784289/pexels-photo-1784289.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '體型大而優雅，適應力強，喜歡攀爬，需要足夠的活動空間。',
            careGuide: {
                feeding: '每天2-3餐，成貓每天約需要80-120g的飼料',
                exercise: '喜歡攀爬，需要垂直空間',
                grooming: '長毛需要每週梳理2-3次',
                health: '注意口腔和心臟健康',
                training: '可以學習基本指令，性格獨立'
            }
        }
    ]
};

// 特徵權重設定
const traitWeights = {
    personality: 0.35,  // 個性特徵權重 35%
    lifestyle: 0.25,   // 生活型態權重 25%
    space: 0.20,       // 居住空間權重 20%
    careTime: 0.20     // 照顧時間權重 20%
};

// 計算匹配度（含權重）
function calculateCompatibility(userTraits, petTraits) {
    let weightedScore = 0;
    
    for (let category in userTraits) {
        // 檢查寵物是否擁有使用者選擇的特徵
        if (petTraits[category].includes(userTraits[category])) {
            weightedScore += traitWeights[category];
        } else {
            // 如果沒有完全匹配，檢查是否有相關特徵
            const relatedTraits = getRelatedTraits(userTraits[category]);
            for (let trait of relatedTraits) {
                if (petTraits[category].includes(trait)) {
                    weightedScore += traitWeights[category] * 0.5; // 相關特徵給予一半權重
                    break;
                }
            }
        }
    }

    return weightedScore * 100; // 轉換為百分比
}

// 取得相關特徵
function getRelatedTraits(trait) {
    const relatedTraits = {
        // 個性特徵相關組
        'active': ['playful', 'social'],
        'calm': ['gentle', 'independent'],
        'friendly': ['social', 'playful'],
        'independent': ['curious', 'protective'],
        'playful': ['active', 'social'],
        'gentle': ['calm', 'friendly'],
        'curious': ['playful', 'intelligent'],
        'protective': ['independent', 'intelligent'],
        'intelligent': ['curious', 'social'],
        'social': ['friendly', 'playful'],
        
        // 生活型態相關組
        'busy': ['social', 'athletic'],
        'relaxed': ['family', 'wfh'],
        'outdoor': ['athletic', 'travel'],
        'indoor': ['wfh', 'night'],
        'athletic': ['outdoor', 'social'],
        'social': ['busy', 'family'],
        'travel': ['outdoor', 'busy'],
        'wfh': ['indoor', 'relaxed'],
        'family': ['relaxed', 'social'],
        'night': ['indoor', 'wfh'],
        
        // 居住空間相關組
        'apartment': ['small', 'studio'],
        'house': ['large', 'garden'],
        'small': ['apartment', 'studio'],
        'large': ['house', 'compound'],
        'garden': ['house', 'rural'],
        'balcony': ['apartment', 'city'],
        'compound': ['large', 'city'],
        'rural': ['house', 'garden'],
        'city': ['apartment', 'balcony'],
        'studio': ['small', 'apartment'],

        // 照顧時間相關組
        'minimal': ['moderate'],
        'moderate': ['minimal', 'adequate'],
        'adequate': ['moderate', 'extensive'],
        'extensive': ['adequate']
    };
    
    return relatedTraits[trait] || [];
}

// 進階特徵分析
function analyzeTraitCompatibility(userTraits, petTraits) {
    const analysis = {};
    
    for (let category in userTraits) {
        const exactMatch = petTraits[category].includes(userTraits[category]);
        const relatedMatch = !exactMatch && getRelatedTraits(userTraits[category])
            .some(trait => petTraits[category].includes(trait));
            
        analysis[category] = {
            match: exactMatch,
            relatedMatch: relatedMatch,
            weight: traitWeights[category],
            score: exactMatch ? traitWeights[category] * 100 : 
                   relatedMatch ? traitWeights[category] * 50 : 0
        };
    }
    
    return analysis;
}

// 找到最佳配對
function findBestMatches(userTraits) {
    let matches = [];

    // 檢查所有寵物類型
    for (let type in pets) {
        pets[type].forEach(pet => {
            const compatibility = calculateCompatibility(userTraits, pet.traits);
            const traitAnalysis = analyzeTraitCompatibility(userTraits, pet.traits);
            
            if (compatibility >= 40) { // 降低門檻至 40% 以提供更多選擇
                matches.push({
                    ...pet,
                    compatibility: compatibility,
                    analysis: traitAnalysis
                });
            }
        });
    }

    // 依匹配度排序
    matches.sort((a, b) => b.compatibility - a.compatibility);
    return matches.slice(0, 3); // 返回前三名
}

// 產生詳細的匹配分析文字
function generateAnalysisText(analysis) {
    const categoryNames = {
        personality: '個性特徵',
        lifestyle: '生活型態',
        space: '居住空間',
        careTime: '照顧時間'
    };
    
    let text = '<div class="trait-analysis">';
    for (let category in analysis) {
        const result = analysis[category];
        text += `
            <div class="trait-item ${result.match ? 'match' : 'mismatch'}">
                <span class="trait-name">${categoryNames[category]}</span>
                <div class="progress">
                    <div class="progress-bar ${result.match ? 'bg-success' : 'bg-secondary'}" 
                         role="progressbar" 
                         style="width: ${result.score}%">
                        ${Math.round(result.score)}%
                    </div>
                </div>
            </div>
        `;
    }
    text += '</div>';
    return text;
}

// 顯示載入動畫
function showLoading() {
    document.getElementById('loading').style.display = 'flex';
}

// 隱藏載入動畫
function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

// 處理表單提交
document.getElementById('dnaForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    // 顯示載入動畫
    showLoading();

    // 獲取用戶輸入
    const userTraits = {
        personality: document.getElementById('personality').value,
        lifestyle: document.getElementById('lifestyle').value,
        space: document.getElementById('space').value,
        careTime: document.getElementById('careTime').value
    };

    // 模擬 AI 運算時間
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 獲取配對結果
    const matches = findBestMatches(userTraits);
    
    // 顯示結果
    const resultSection = document.getElementById('resultSection');
    const matchResult = document.getElementById('matchResult');
    matchResult.innerHTML = '';

    if (matches.length > 0) {
        matches.forEach(match => {
            matchResult.innerHTML += `
                <div class="match-item">
                    <img src="${match.image}" alt="${match.name}" class="img-fluid">
                    <h4>${match.name}</h4>
                    <div class="compatibility-score">
                        <i class="fas fa-heart me-2"></i>
                        整體匹配度：${Math.round(match.compatibility)}%
                    </div>
                    ${generateAnalysisText(match.analysis)}
                    <p class="pet-description">
                        <i class="fas fa-paw me-2"></i>
                        ${match.description}
                    </p>
                    <div class="care-guide">
                        <h5 class="care-guide-title">
                            <i class="fas fa-book-medical me-2"></i>照護指南
                        </h5>
                        <div class="care-guide-content">
                            <div class="care-item">
                                <i class="fas fa-utensils me-2"></i>
                                <strong>餵食建議：</strong>${match.careGuide.feeding}
                            </div>
                            <div class="care-item">
                                <i class="fas fa-running me-2"></i>
                                <strong>運動需求：</strong>${match.careGuide.exercise}
                            </div>
                            <div class="care-item">
                                <i class="fas fa-bath me-2"></i>
                                <strong>清潔護理：</strong>${match.careGuide.grooming}
                            </div>
                            <div class="care-item">
                                <i class="fas fa-heart me-2"></i>
                                <strong>健康管理：</strong>${match.careGuide.health}
                            </div>
                            <div class="care-item">
                                <i class="fas fa-graduation-cap me-2"></i>
                                <strong>訓練提示：</strong>${match.careGuide.training}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        resultSection.style.display = 'block';
    } else {
        matchResult.innerHTML = `
            <div class="no-match-message">
                <i class="fas fa-sad-tear mb-3" style="font-size: 3rem; color: #6c757d;"></i>
                <p>抱歉，沒有找到合適的配對結果。請嘗試調整您的選擇。</p>
            </div>
        `;
        resultSection.style.display = 'block';
    }

    // 隱藏載入動畫
    hideLoading();

    // 平滑滾動到結果區域
    resultSection.scrollIntoView({ behavior: 'smooth' });
});