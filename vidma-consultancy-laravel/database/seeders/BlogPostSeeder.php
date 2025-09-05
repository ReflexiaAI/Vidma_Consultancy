<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class BlogPostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = [
            [
                'title' => 'Understanding Corporate Law in the Digital Age',
                'excerpt' => 'As businesses increasingly operate in digital environments, corporate law must adapt to new challenges and opportunities.',
                'content' => '<h2>Introduction</h2><p>Corporate law is evolving rapidly in response to digital transformation. Companies must navigate complex legal landscapes while maintaining compliance and protecting stakeholder interests.</p><h3>Key Considerations</h3><ul><li>Digital governance structures</li><li>Data protection compliance</li><li>Intellectual property in digital assets</li><li>Cybersecurity legal frameworks</li></ul><p>Understanding these evolving requirements is crucial for modern businesses seeking to maintain legal compliance while leveraging digital opportunities.</p>',
                'categories' => ['Corporate Law', 'Digital Transformation', 'Compliance'],
                'published_date' => Carbon::now()->subDays(5),
            ],
            [
                'title' => 'M&A Transactions: Due Diligence Best Practices',
                'excerpt' => 'Effective due diligence is the cornerstone of successful merger and acquisition transactions.',
                'content' => '<h2>Due Diligence Framework</h2><p>Comprehensive due diligence involves multiple layers of investigation across financial, legal, operational, and strategic dimensions.</p><h3>Financial Due Diligence</h3><p>Financial analysis forms the foundation of any M&A transaction. Key areas include:</p><ul><li>Historical financial performance</li><li>Cash flow analysis</li><li>Working capital assessment</li><li>Debt and liability review</li></ul><h3>Legal Due Diligence</h3><p>Legal due diligence ensures compliance and identifies potential risks:</p><ul><li>Contract review and analysis</li><li>Regulatory compliance assessment</li><li>Intellectual property evaluation</li><li>Litigation and dispute review</li></ul>',
                'categories' => ['M&A', 'Due Diligence', 'Corporate Transactions'],
                'published_date' => Carbon::now()->subDays(10),
            ],
            [
                'title' => 'ESG Compliance: A Legal Perspective',
                'excerpt' => 'Environmental, Social, and Governance (ESG) factors are becoming increasingly important in legal compliance and risk management.',
                'content' => '<h2>ESG Legal Framework</h2><p>ESG compliance involves navigating complex regulatory requirements while implementing sustainable business practices.</p><h3>Environmental Compliance</h3><p>Environmental regulations require careful attention to:</p><ul><li>Carbon footprint reporting</li><li>Waste management protocols</li><li>Energy efficiency standards</li><li>Sustainable resource utilization</li></ul><h3>Social Responsibility</h3><p>Social compliance encompasses:</p><ul><li>Labor rights and working conditions</li><li>Community engagement requirements</li><li>Diversity and inclusion standards</li><li>Human rights considerations</li></ul><h3>Governance Standards</h3><p>Governance compliance includes:</p><ul><li>Board composition and independence</li><li>Executive compensation policies</li><li>Transparency and disclosure requirements</li><li>Risk management frameworks</li></ul>',
                'categories' => ['ESG', 'Compliance', 'Sustainability'],
                'published_date' => Carbon::now()->subDays(15),
            ],
            [
                'title' => 'Intellectual Property Protection Strategies',
                'excerpt' => 'Protecting intellectual property is crucial for maintaining competitive advantage and ensuring business value.',
                'content' => '<h2>IP Protection Framework</h2><p>Effective intellectual property protection requires a comprehensive strategy covering patents, trademarks, copyrights, and trade secrets.</p><h3>Patent Protection</h3><p>Patent strategy involves:</p><ul><li>Prior art analysis</li><li>Patent application drafting</li><li>Prosecution management</li><li>Portfolio optimization</li></ul><h3>Trademark Management</h3><p>Trademark protection includes:</p><ul><li>Brand clearance searches</li><li>Registration strategies</li><li>Enforcement programs</li><li>International protection</li></ul><h3>Copyright Considerations</h3><p>Copyright protection covers:</p><ul><li>Original content creation</li><li>Registration benefits</li><li>Fair use analysis</li><li>Digital rights management</li></ul>',
                'categories' => ['Intellectual Property', 'Patents', 'Trademarks'],
                'published_date' => Carbon::now()->subDays(20),
            ],
            [
                'title' => 'International Business Law: Cross-Border Considerations',
                'excerpt' => 'Navigating international business law requires understanding complex regulatory frameworks across multiple jurisdictions.',
                'content' => '<h2>Cross-Border Legal Framework</h2><p>International business operations require careful consideration of multiple legal systems and regulatory requirements.</p><h3>Regulatory Compliance</h3><p>Key compliance areas include:</p><ul><li>Foreign investment regulations</li><li>Trade compliance requirements</li><li>Tax treaty considerations</li><li>Employment law variations</li></ul><h3>Contract Management</h3><p>International contracts must address:</p><ul><li>Governing law selection</li><li>Dispute resolution mechanisms</li><li>Currency and payment terms</li><li>Force majeure provisions</li></ul><h3>Risk Management</h3><p>International risk factors include:</p><ul><li>Political and regulatory risks</li><li>Currency fluctuation exposure</li><li>Cultural and language barriers</li><li>Enforcement challenges</li></ul>',
                'categories' => ['International Law', 'Cross-Border', 'Compliance'],
                'published_date' => Carbon::now()->subDays(25),
            ],
        ];

        foreach ($posts as $postData) {
            $postData['slug'] = BlogPost::generateSlug($postData['title']);
            BlogPost::create($postData);
        }
    }
}
