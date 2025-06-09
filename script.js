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
        }
    ]
};

// 計算匹配度
function calculateCompatibility(userTraits, petTraits) {
    let score = 0;
    let maxScore = 0;

    for (let category in userTraits) {
        if (petTraits[category].includes(userTraits[category])) {
            score += 1;
        }
        maxScore += 1;
    }

    return (score / maxScore) * 100;
}

// 找到最佳配對
function findBestMatches(userTraits) {
    let matches = [];

    // 檢查所有寵物類型
    for (let type in pets) {
        pets[type].forEach(pet => {
            const compatibility = calculateCompatibility(userTraits, pet.traits);
            if (compatibility >= 50) { // 只顯示匹配度超過 50% 的寵物
                matches.push({
                    ...pet,
                    compatibility: compatibility
                });
            }
        });
    }

    // 依匹配度排序
    matches.sort((a, b) => b.compatibility - a.compatibility);
    return matches.slice(0, 3); // 返回前三名
}

// 處理表單提交
document.getElementById('dnaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 獲取用戶輸入
    const userTraits = {
        personality: document.getElementById('personality').value,
        lifestyle: document.getElementById('lifestyle').value,
        space: document.getElementById('space').value
    };

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
                    <div class="compatibility-score">匹配度：${Math.round(match.compatibility)}%</div>
                    <p class="pet-description">${match.description}</p>
                </div>
                <hr>
            `;
        });
        resultSection.style.display = 'block';
    } else {
        matchResult.innerHTML = '<p>抱歉，沒有找到合適的配對結果。請嘗試調整您的選擇。</p>';
        resultSection.style.display = 'block';
    }
});