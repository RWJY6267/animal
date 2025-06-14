// 寵物資料庫
const pets = {
    dogs: [
        {
            name: '拉布拉多',
            traits: {
                personality: ['active', 'friendly'],
                lifestyle: ['outdoor', 'relaxed'],
                space: ['house', 'large']
            },
            image: 'https://images.pexels.com/photos/1118785/pexels-photo-1118785.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '充滿活力、友善的家庭犬，適合有大空間的家庭。'
        },
        {
            name: '柴犬',
            traits: {
                personality: ['independent', 'friendly'],
                lifestyle: ['relaxed', 'indoor'],
                space: ['apartment', 'small']
            },
            image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '忠誠獨立，適應力強，適合公寓生活。'
        },
        {
            name: '吉娃娃',
            traits: {
                personality: ['active', 'friendly'],
                lifestyle: ['indoor', 'relaxed'],
                space: ['apartment', 'small']
            },
            image: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '體型小巧、活潑可愛，適合居住在公寓的寵物犬，非常適合陪伴型的生活方式。'
        },
        {
            name: '金毛尋回犬',
            traits: {
                personality: ['friendly', 'active'],
                lifestyle: ['outdoor', 'relaxed'],
                space: ['house', 'large']
            },
            image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '智商高、親人友善，最適合有孩子的家庭，需要較大的活動空間。'
        },
        {
            name: '臘腸狗',
            traits: {
                personality: ['active', 'independent'],
                lifestyle: ['indoor', 'relaxed'],
                space: ['apartment', 'small']
            },
            image: 'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '體型小巧但性格獨立，適應力強，適合公寓生活，不需要太大的活動空間。'
        },
        {
            name: '哈士奇',
            traits: {
                personality: ['active', 'independent'],
                lifestyle: ['outdoor', 'busy'],
                space: ['house', 'large']
            },
            image: 'https://images.pexels.com/photos/3715587/pexels-photo-3715587.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '精力充沛、活潑好動，需要大量運動，適合有大院子的家庭。'
        }
    ],
    cats: [
        {
            name: '英國短毛貓',
            traits: {
                personality: ['calm', 'friendly'],
                lifestyle: ['indoor', 'relaxed'],
                space: ['apartment', 'small']
            },
            image: 'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '性格溫和，適合室內生活的理想寵物。'
        },
        {
            name: '緬因貓',
            traits: {
                personality: ['active', 'independent'],
                lifestyle: ['indoor', 'busy'],
                space: ['house', 'large']
            },
            image: 'https://images.pexels.com/photos/1521306/pexels-photo-1521306.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '大型貓咪，活潑好動，需要較大活動空間。'
        },
        {
            name: '波斯貓',
            traits: {
                personality: ['calm', 'independent'],
                lifestyle: ['indoor', 'relaxed'],
                space: ['apartment', 'small']
            },
            image: 'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '性格優雅、安靜，適合室內生活，需要定期梳理毛髮。'
        },
        {
            name: '暹羅貓',
            traits: {
                personality: ['active', 'friendly'],
                lifestyle: ['indoor', 'busy'],
                space: ['apartment', 'small']
            },
            image: 'https://images.pexels.com/photos/991831/pexels-photo-991831.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '聰明好動、喜歡與人互動，適應力強，叫聲特別。'
        },
        {
            name: '蘇格蘭摺耳貓',
            traits: {
                personality: ['calm', 'friendly'],
                lifestyle: ['indoor', 'relaxed'],
                space: ['apartment', 'small']
            },
            image: 'https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '性格溫順、親人，適合室內生活，獨特的耳朵形狀非常可愛。'
        },
        {
            name: '美國短毛貓',
            traits: {
                personality: ['friendly', 'independent'],
                lifestyle: ['indoor', 'busy'],
                space: ['apartment', 'small']
            },
            image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400',
            description: '容易相處、適應力強，適合初次養貓的家庭，不太需要特別的照顧。'
        }
    ]
};

// 特徵權重設定
const traitWeights = {
    personality: 0.4,  // 個性特徵權重 40%
    lifestyle: 0.35,   // 生活型態權重 35%
    space: 0.25       // 居住空間權重 25%
};

// 計算匹配度（含權重）
function calculateCompatibility(userTraits, petTraits) {
    let weightedScore = 0;

    for (let category in userTraits) {
        if (petTraits[category].includes(userTraits[category])) {
            weightedScore += traitWeights[category];
        }
    }

    return weightedScore * 100; // 轉換為百分比
}

// 進階特徵分析
function analyzeTraitCompatibility(userTraits, petTraits) {
    const analysis = {};
    
    for (let category in userTraits) {
        analysis[category] = {
            match: petTraits[category].includes(userTraits[category]),
            weight: traitWeights[category],
            score: petTraits[category].includes(userTraits[category]) ? traitWeights[category] * 100 : 0
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
        space: '居住空間'
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
        space: document.getElementById('space').value
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