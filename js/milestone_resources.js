// 里程碑资源管理脚本

/**
 * 里程碑资源数据
 * 包含每个里程碑的提示词模板和输出物文件
 */
const milestoneResources = [
    {
        id: 1,
        title: "里程碑 1: 完成市场调研与用户洞察",
        prompts: [
            {
                name: "市场调研提示词模板",
                description: "用于指导辟谷代餐市场调研的提示词",
                filename: "market_research_prompt.txt",
                content: `请帮我进行辟谷代餐市场的全面调研，这是我正在分享的一个人+AI创业实践案例，需要包括以下方面：
1. 市场规模与增长趋势分析
2. 目标用户群体分析（年龄、性别、收入、生活方式等）
3. 用户需求与痛点分析
4. 主要竞争对手分析（至少5家）
5. 行业政策与法规分析
6. 市场机会与挑战分析

请提供详细的数据支持和分析结论，以便我展示如何利用AI进行市场调研，作为辟谷代餐品牌实践过程分享的一部分。`
            },
            {
                name: "用户画像提示词模板",
                description: "用于创建辟谷代餐目标用户画像的提示词",
                filename: "user_persona_prompt.txt",
                content: `请帮我创建5个辟谷代餐产品的典型用户画像，每个画像应包含以下信息：
1. 基本信息：姓名、年龄、性别、职业、收入水平、家庭状况
2. 生活方式：日常饮食习惯、运动习惯、工作压力、社交活动
3. 健康需求：健康目标、身体状况、特殊饮食需求
4. 消费习惯：购物渠道、价格敏感度、品牌忠诚度
5. 痛点与需求：对现有代餐产品的不满、对辟谷代餐的期望
6. 媒体接触点：常用社交媒体、获取信息的渠道

请确保这些用户画像具有代表性，能够覆盖辟谷代餐产品的主要目标客户群。这是我正在分享的一个人+AI创业实践案例的一部分，用于展示如何利用AI工具进行用户研究。`
            },
            {
                name: "竞品分析提示词模板",
                description: "用于分析辟谷代餐竞争对手的提示词",
                filename: "competitor_analysis_prompt.txt",
                content: `请对辟谷代餐市场的5个主要竞争品牌进行详细分析，每个品牌分析应包含：
1. 品牌概况：创立时间、市场定位、核心价值主张
2. 产品线分析：主要产品类型、特色产品、价格策略
3. 成分与功效分析：主要原料、营养成分、宣传的功效
4. 包装设计分析：视觉风格、材质选择、使用便利性
5. 营销策略分析：主要营销渠道、营销活动、社交媒体表现
6. 用户评价分析：产品口碑、用户满意度、常见投诉
7. SWOT分析：优势、劣势、机会、威胁

请基于这些分析，总结出我们可以借鉴的成功经验和需要避免的问题，以及潜在的差异化竞争策略。这是我正在分享的一个人+AI创业实践案例的一部分，用于展示如何利用AI进行竞品分析。`
            }
        ],
        outputs: [
            {
                name: "市场调研报告模板",
                description: "辟谷代餐市场调研报告的结构和内容模板",
                filename: "market_research_report_template.docx",
                downloadUrl: "#"
            },
            {
                name: "用户画像模板",
                description: "辟谷代餐用户画像的标准模板",
                filename: "user_persona_template.pptx",
                downloadUrl: "#"
            },
            {
                name: "竞品分析表格模板",
                description: "用于记录和比较竞争对手信息的表格模板",
                filename: "competitor_analysis_template.xlsx",
                downloadUrl: "#"
            }
        ]
    },
    {
        id: 2,
        title: "里程碑 2: 明确品牌定位与核心价值",
        prompts: [
            {
                name: "品牌定位提示词模板",
                description: "用于确定辟谷代餐品牌定位的提示词",
                filename: "brand_positioning_prompt.txt",
                content: `请帮我为一个新的辟谷代餐品牌制定清晰的品牌定位，包括以下内容：
1. 目标受众：主要目标客户群体的详细描述
2. 品牌核心定位：在消费者心智中的独特位置
3. 差异化竞争优势(USP)：与竞争对手相比的独特卖点
4. 品牌个性：如果品牌是一个人，它会有什么样的性格特质
5. 品牌价值观：品牌坚持的核心理念和原则
6. 品牌愿景：品牌长期希望实现的目标和影响

请确保品牌定位符合市场调研结果，能够满足目标用户的需求，并在竞争激烈的代餐市场中脱颖而出。这是我正在分享的一个人+AI创业实践案例的一部分，用于展示如何利用AI工具进行品牌定位。`
            },
            {
                name: "价值主张提示词模板",
                description: "用于创建辟谷代餐品牌价值主张的提示词",
                filename: "value_proposition_prompt.txt",
                content: `请为辟谷代餐品牌创建一个强有力的价值主张(Value Proposition)，包括：
1. 核心价值主张：一句话概括品牌能为用户提供的核心价值
2. 功能性利益：产品能够解决的具体问题或满足的功能需求
3. 情感性利益：产品能够带给用户的情感体验和满足感
4. 社会性利益：使用产品能够为用户带来的社会认同或表达的身份

请确保价值主张简洁有力，容易理解和记忆，能够有效传达品牌的独特价值，并与目标用户产生共鸣。这是我正在分享的一个人+AI创业实践案例的一部分，用于展示如何利用AI工具创建有吸引力的品牌价值主张。`
            },
            {
                name: "品牌故事提示词模板",
                description: "用于创作辟谷代餐品牌故事的提示词",
                filename: "brand_story_prompt.txt",
                content: `请为辟谷代餐品牌创作一个引人入胜的品牌故事，包括以下要素：
1. 起源：品牌创立的背景和初衷
2. 使命：品牌希望解决的问题和实现的改变
3. 理念：品牌坚持的核心价值观和原则
4. 旅程：品牌发展过程中的关键转折点或里程碑
5. 愿景：品牌对未来的展望和承诺

请确保故事真实、情感丰富、有说服力，能够与目标用户建立情感连接，并体现品牌的独特性和价值观。故事应该简洁而有力，易于在不同渠道传播。这是我正在分享的一个人+AI创业实践案例的一部分，用于展示如何利用AI工具创建有感染力的品牌故事。`
            }
        ],
        outputs: [
            {
                name: "品牌定位报告模板",
                description: "辟谷代餐品牌定位报告的结构和内容模板",
                filename: "brand_positioning_template.docx",
                downloadUrl: "#"
            },
            {
                name: "价值主张画布模板",
                description: "用于梳理和呈现品牌价值主张的画布模板",
                filename: "value_proposition_canvas.pptx",
                downloadUrl: "#"
            },
            {
                name: "品牌故事框架模板",
                description: "用于构建品牌故事的框架和结构模板",
                filename: "brand_story_framework.docx",
                downloadUrl: "#"
            }
        ]
    },
    {
        id: 3,
        title: "里程碑 3: 完成初步的产品概念设计与配方方向",
        prompts: [
            {
                name: "产品概念提示词模板",
                description: "用于设计辟谷代餐产品概念的提示词",
                filename: "product_concept_prompt.txt",
                content: `请帮我设计辟谷代餐产品的概念，包括以下内容：
1. 产品形态：粉剂、代餐棒、即食粥等形式的详细描述
2. 核心成分：主要原料和功能性成分的选择及理由
3. 目标功效：产品希望达到的健康效果和价值
4. 口味特点：产品的口味方向和特色
5. 适用人群：最适合使用该产品的人群特征
6. 使用场景：产品最适合在什么场景下使用
7. 差异化特点：与市场现有产品的主要区别

请确保产品概念符合品牌定位，满足目标用户需求，并具有市场竞争力。这是我正在分享的一个人+AI创业实践案例的一部分，用于展示如何利用AI工具进行产品概念设计。`
            },
            {
                name: "配方方向提示词模板",
                description: "用于确定辟谷代餐产品配方方向的提示词",
                filename: "formulation_direction_prompt.txt",
                content: `请为辟谷代餐产品提供初步的配方方向建议，包括：
1. 主要原料选择：建议使用的主要食材及其营养价值
2. 功能性成分：可以添加的具有特定功效的成分
3. 营养成分配比：各类营养素(蛋白质、碳水化合物、脂肪、维生素、矿物质等)的大致比例
4. 口味方向：推荐的口味种类和调味方案
5. 质地与口感：产品应该具备的质地和口感特点
6. 保质期考虑：影响保质期的因素和初步解决方案

请基于市场调研和用户需求，提供科学合理的配方方向建议，确保产品既美味又健康，符合辟谷代餐的定位。`
            },
            {
                name: "包装设计提示词模板",
                description: "用于设计辟谷代餐产品包装的提示词",
                filename: "packaging_design_prompt.txt",
                content: `请为辟谷代餐产品提供初步的包装设计方案，包括：
1. 包装形式：建议的包装类型(袋装、盒装、瓶装等)
2. 包装材质：推荐使用的材质及其优势
3. 包装尺寸：适合的尺寸范围及依据
4. 视觉风格：包装的整体视觉风格、色彩方案
5. 关键信息：包装上应突出展示的产品信息
6. 功能性考虑：便于储存、携带、使用的设计要点
7. 环保考虑：可持续包装的可能性和建议

请确保包装设计符合品牌定位和目标用户偏好，既美观吸引人，又实用便捷，能够在货架上脱颖而出。`
            }
        ],
        outputs: [
            {
                name: "产品概念文档模板",
                description: "辟谷代餐产品概念的详细描述模板",
                filename: "product_concept_template.docx",
                downloadUrl: "#"
            },
            {
                name: "配方方向规划表",
                description: "用于规划产品配方方向的表格模板",
                filename: "formulation_planning_template.xlsx",
                downloadUrl: "#"
            },
            {
                name: "包装设计简报模板",
                description: "用于向设计师传达包装设计需求的简报模板",
                filename: "packaging_design_brief.pptx",
                downloadUrl: "#"
            }
        ]
    },
    {
        id: 4,
        title: "里程碑 4: 完成商业模式设计与盈利模式规划",
        prompts: [
            {
                name: "商业模式提示词模板",
                description: "用于设计辟谷代餐品牌商业模式的提示词",
                filename: "business_model_prompt.txt",
                content: `请帮我为辟谷代餐品牌设计一个完整的商业模式，使用商业模式画布(Business Model Canvas)的九大要素进行分析：
1. 客户细分：目标客户群体的详细描述
2. 价值主张：品牌为客户提供的核心价值
3. 渠道通路：如何将产品和服务传递给客户
4. 客户关系：与不同客户群体建立和维持的关系类型
5. 收入来源：品牌如何从价值主张中获取收入
6. 关键资源：执行商业模式所需的最重要资产
7. 关键活动：品牌必须执行的最重要任务
8. 重要伙伴：能够帮助品牌运作的供应商和合作伙伴
9. 成本结构：商业模式运作中产生的所有成本

请确保商业模式符合品牌定位和市场需求，具有可行性和可持续性，能够支持品牌的长期发展。`
            },
            {
                name: "盈利模式提示词模板",
                description: "用于规划辟谷代餐品牌盈利模式的提示词",
                filename: "revenue_model_prompt.txt",
                content: `请帮我为辟谷代餐品牌规划详细的盈利模式，包括以下内容：
1. 主要收入来源：产品销售、会员订阅、增值服务等
2. 定价策略：产品定价区间、定价依据、价格差异化策略
3. 销售渠道组合：线上渠道、线下渠道的比例和协同
4. 成本结构分析：固定成本、变动成本、规模效应分析
5. 毛利率与净利率目标：不同阶段的利润目标
6. 盈亏平衡分析：达到盈亏平衡点所需的销售量和时间
7. 现金流规划：初期投入、回收周期、再投资计划

请确保盈利模式具有可行性和可持续性，能够支持品牌的长期发展和增长。`
            }
        ],
        outputs: [
            {
                name: "商业模式画布模板",
                description: "用于梳理和呈现辟谷代餐品牌商业模式的画布模板",
                filename: "business_model_canvas_template.pptx",
                downloadUrl: "#"
            },
            {
                name: "盈利模式规划表格",
                description: "用于详细规划盈利模式的表格模板",
                filename: "revenue_model_template.xlsx",
                downloadUrl: "#"
            },
            {
                name: "财务预测模板",
                description: "用于进行初步财务预测的电子表格模板",
                filename: "financial_forecast_template.xlsx",
                downloadUrl: "#"
            }
        ]
    },
    // 其他里程碑资源数据将根据需要添加
];

/**
 * 获取指定里程碑的资源数据
 * @param {number} milestoneId - 里程碑ID
 * @returns {Object|null} - 里程碑资源数据对象或null
 */
function getMilestoneResources(milestoneId) {
    return milestoneResources.find(item => item.id === milestoneId) || null;
}

/**
 * 下载提示词模板内容
 * @param {number} milestoneId - 里程碑ID
 * @param {number} promptIndex - 提示词索引
 */
function downloadPromptTemplate(milestoneId, promptIndex) {
    const milestone = getMilestoneResources(milestoneId);
    if (!milestone || !milestone.prompts[promptIndex]) return;
    
    const prompt = milestone.prompts[promptIndex];
    const blob = new Blob([prompt.content], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = prompt.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * 下载输出物文件
 * @param {number} milestoneId - 里程碑ID
 * @param {number} outputIndex - 输出物索引
 */
function downloadOutputTemplate(milestoneId, outputIndex) {
    const milestone = getMilestoneResources(milestoneId);
    if (!milestone || !milestone.outputs[outputIndex]) return;
    
    const output = milestone.outputs[outputIndex];
    // 在实际应用中，这里应该链接到真实的文件下载地址
    // 这里仅作为示例，提示用户文件暂未上传
    alert(`${output.filename} 文件准备下载中，请稍候...`);
    // window.open(output.downloadUrl, '_blank');
}