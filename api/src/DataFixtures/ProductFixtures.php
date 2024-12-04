<?php

namespace App\DataFixtures;

use App\Factory\CategoryFactory;
use App\Factory\ProductFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class ProductFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $file = file_get_contents(__DIR__.'/../DataFixtures/data/products.json');
        $file_j = json_decode($file, true);
        $categories = CategoryFactory::all();
        for ($i = 1; $i < count($file_j) + 1; ++$i) {
            $category = $categories[intval(($i - 1) / 2)];
            ProductFactory::createOne([
                'nom' => $file_j[$i - 1]['nom'],
                'description' => $file_j[$i - 1]['description'],
                'prix' => $file_j[$i - 1]['prix'],
                'category' => $category,
            ]);
        }
    }

    public function getDependencies(): array
    {
        return [
            CategoryFixtures::class,
        ];
    }
}
