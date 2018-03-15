const Queries = {
    nearestLocation: `SELECT *
    FROM (
        SELECT z.item_name, z.lat, z.lng, z.item_url, z.img_urls, p.radius,p.distance_unit
            * DEGREES(ACOS(COS(RADIANS(p.lat))
            * COS(RADIANS(z.lat))
            * COS(RADIANS(p.lon - z.lng))
            + SIN(RADIANS(p.lat))
            * SIN(RADIANS(z.lat)))) AS distance
        FROM items AS z
        JOIN (   /* these are the query parameters */
            SELECT  ?  AS lat,  ? AS lon,
                50.0 AS radius,      111.045 AS distance_unit
        ) AS p ON 1=1
        WHERE z.lat
            BETWEEN p.lat  - (p.radius / p.distance_unit)
            AND p.lat  + (p.radius / p.distance_unit)
        AND z.lng
            BETWEEN p.lon - (p.radius / (p.distance_unit * COS(RADIANS(p.lat))))
            AND p.lon + (p.radius / (p.distance_unit * COS(RADIANS(p.lat))))
    ) AS d
    WHERE distance <= radius
    ORDER BY distance
    LIMIT 20`,
    matchText: `SELECT *
    FROM items 
        WHERE item_name LIKE ?
        ORDER BY item_name;`
}

module.exports = Queries